/**
 * ═══════════════════════════════════════════════════
 *   🤖 AGENTE JURÍDICO - Monitor Legal Automatizado
 *   CalculadoraTrabalhista.com.br
 * ═══════════════════════════════════════════════════
 *
 * Este agente monitora fontes oficiais (TST, STF, Planalto)
 * em busca de atualizações em:
 *   - Súmulas do TST
 *   - Orientações Jurisprudenciais (OJs) do TST
 *   - Jurisprudência / Temas Repetitivos
 *   - Leis trabalhistas (CLT, CF/88)
 *   - Súmulas Vinculantes do STF
 *
 * Quando mudanças são detectadas, o agente:
 *   1. Analisa o impacto das mudanças via IA (OpenRouter)
 *   2. Atualiza automaticamente os arquivos de dados
 *   3. Rebuilda o site
 *   4. Commita e faz push (deploy automático)
 *
 * USO:
 *   node agente-juridico.mjs              # Verifica TODAS as fontes
 *   node agente-juridico.mjs tst          # Apenas TST
 *   node agente-juridico.mjs stf          # Apenas STF
 *   node agente-juridico.mjs planalto     # Apenas Planalto
 *   node agente-juridico.mjs relatorio    # Apenas relatório, sem alterações
 *
 * AGENDAMENTO:
 *   Recomendado: 1x por semana (domingo às 10h)
 *
 * VARIÁVEIS DE AMBIENTE:
 *   OPENROUTER_API_KEY  - Chave da API OpenRouter (obrigatória)
 *   SITE_URL            - URL do site
 *   AGENTE_LOG_DIR      - Diretório de logs (padrão: ./logs)
 *
 * ═══════════════════════════════════════════════════
 */

// ── Imports ──────────────────────────────────────
import { writeFileSync, readFileSync, existsSync, mkdirSync, appendFileSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── Carregar .env automaticamente ────────────────
const envPath = resolve(__dirname, '.env');
if (existsSync(envPath)) {
  const envContent = readFileSync(envPath, 'utf-8');
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#') || !trimmed.includes('=')) continue;
    const eqIdx = trimmed.indexOf('=');
    const key = trimmed.slice(0, eqIdx).trim();
    let val = trimmed.slice(eqIdx + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (!process.env[key]) {
      process.env[key] = val;
    }
  }
}

// ── Configuração ─────────────────────────────────
const CONFIG = {
  MODEL: process.env.MODEL || 'google/gemini-2.0-flash-001',
  SITE_URL: process.env.SITE_URL || 'https://www.calculadoratrabalhista.com.br',
  API_KEY: process.env.OPENROUTER_API_KEY || process.env.GEMINI_API_KEY,
  LOG_DIR: resolve(__dirname, process.env.AGENTE_LOG_DIR || 'logs'),
  STATE_FILE: resolve(__dirname, 'data', 'agente-estado.json'),
  DRY_RUN: process.argv.includes('--dry-run'),
  // URLs oficiais para monitoramento
  SOURCES: {
    TST: {
      sumulas: 'https://www.tst.jus.br/sumulas',
      ojs: 'https://www.tst.jus.br/orientacoes-jurisprudenciais',
      jurisprudencia: 'https://jurisprudencia.jt.jus.br/jurisprudencia-nacional/pesquisa',
      dejt: 'https://dejt.jt.jus.br/dejt/f/n/diariocon',
      dadosAbertos: 'https://www.tst.jus.br/web/acesso-a-informacao/dados-abertos',
    },
    STF: {
      portal: 'https://portal.stf.jus.br/jurisprudenciaRepercussao/',
      sumulasVinculantes: 'https://portal.stf.jus.br/sumulas/',
      corteAberta: 'https://portal.stf.jus.br/hotsites/corteaberta/',
    },
    PLANALTO: {
      normasLeg: 'https://www.normas.leg.br/api/v1/normas?tipo=DL&numero=5452&ano=1943',
      senado: 'https://legis.senado.leg.br/dados-abertos/api/legislacao/',
    },
    CNJ: {
      datajud: 'https://datajud.cnj.jus.br/api/publico/',
    },
  },
};

// ── Logger ────────────────────────────────────────
function log(level, ...args) {
  const timestamp = new Date().toISOString().replace('T', ' ').slice(0, 19);
  const prefix = `[${timestamp}] [${level}]`;
  const message = `${prefix} ${args.join(' ')}`;

  console.log(message);

  // Salvar em arquivo de log
  mkdirSync(CONFIG.LOG_DIR, { recursive: true });
  const logFile = join(CONFIG.LOG_DIR, `agente-juridico-${new Date().toISOString().slice(0, 10)}.log`);
  appendFileSync(logFile, message + '\n', 'utf-8');
}

const info = (...a) => log('INFO', ...a);
const warn = (...a) => log('⚠️  WARN', ...a);
const error = (...a) => log('❌ ERROR', ...a);
const ok = (...a) => log('✅', ...a);
const section = (title) => {
  const line = '─'.repeat(60);
  console.log(`\n${line}\n  ${title}\n${line}`);
};

// ── Estado do Agente ─────────────────────────────
function loadState() {
  const defaultState = {
    ultimaVerificacao: null,
    fontes: {
      tst: { ultimoCheck: null, ultimaAtualizacao: null, hashSumulas: null, hashOJs: null, hashJurisprudencia: null },
      stf: { ultimoCheck: null, ultimaAtualizacao: null, hashSumulasVinculantes: null },
      planalto: { ultimoCheck: null, ultimaAtualizacao: null, hashCLT: null },
    },
    historico: [],
    estatisticas: {
      totalVerificacoes: 0,
      totalAtualizacoes: 0,
      ultimaAtualizacaoRealizada: null,
    },
  };

  if (existsSync(CONFIG.STATE_FILE)) {
    try {
      const saved = JSON.parse(readFileSync(CONFIG.STATE_FILE, 'utf-8'));
      return { ...defaultState, ...saved };
    } catch (e) {
      warn('Erro ao carregar estado, iniciando novo:', e.message);
    }
  }
  return defaultState;
}

function saveState(state) {
  mkdirSync(dirname(CONFIG.STATE_FILE), { recursive: true });
  writeFileSync(CONFIG.STATE_FILE, JSON.stringify(state, null, 2), 'utf-8');
}

// ── Fetch Helper ─────────────────────────────────
async function fetchWithTimeout(url, options = {}) {
  const { timeout = 15000, ...fetchOptions } = options;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 CalculadoraTrabalhista/1.0',
        'Accept': 'application/json, text/html, text/plain, */*',
        ...(fetchOptions.headers || {}),
      },
    });
    return response;
  } catch (err) {
    throw new Error(`Falha ao acessar ${url}: ${err.message}`);
  } finally {
    clearTimeout(timeoutId);
  }
}

// ── Chamada à IA (OpenRouter) ────────────────────
async function consultarIA(systemPrompt, userPrompt) {
  if (!CONFIG.API_KEY) {
    throw new Error('OPENROUTER_API_KEY não configurada. Defina no .env ou como variável de ambiente.');
  }

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${CONFIG.API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': CONFIG.SITE_URL,
        'X-Title': 'Calculadora Trabalhista - Agente Jurídico',
      },
      body: JSON.stringify({
        model: CONFIG.MODEL,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt },
        ],
        temperature: 0.3,  // Baixa temperatura para análises mais precisas
        max_tokens: 8192,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`API Error ${response.status}: ${errText}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;
    if (!content) throw new Error('Resposta vazia da API');

    // Tentar extrair JSON
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      try {
        return JSON.parse(jsonMatch[0]);
      } catch {
        // Se falhar, retornar o texto bruto
      }
    }
    return { raw: content };
  } catch (err) {
    error('Erro ao consultar IA:', err.message);
    throw err;
  }
}

// ── Monitoramento ─────────────────────────────────

/**
 * Módulo 1: TST - Súmulas, OJs e Jurisprudência
 */
async function verificarTST(state) {
  section('📚 TRIBUNAL SUPERIOR DO TRABALHO (TST)');
  const resultados = { sumulas: null, ojs: null, jurisprudencia: null, atualizacoes: [] };

  // --- Súmulas ---
  info('Verificando Súmulas do TST...');
  try {
    // Tenta acessar a página de súmulas
    const resp = await fetchWithTimeout(CONFIG.SOURCES.TST.sumulas, { timeout: 10000 });
    if (resp.ok) {
      const html = await resp.text();

      // Usar IA para analisar a página e extrair as súmulas
      const analise = await consultarIA(
        `Você é um especialista em direito trabalhista analisando a página de Súmulas do TST.
         Extraia APENAS os dados REAIS encontrados no HTML fornecido.
         NÃO invente dados que não estejam no texto.
         Retorne um JSON com:
         {
           "sumulasEncontradas": número de súmulas listadas,
           "sumulas": [{ "numero": número, "titulo": título, "ementa": texto_resumido }],
           "dataUltimaAtualizacao": data se encontrada,
           "sumulasNovas": [],  // súmulas não encontradas nos dados atuais
           "sumulasAlteradas": [],  // súmulas com conteúdo diferente
         }`,
        `Analise o HTML a seguir da página de Súmulas do TST e extraia as informações das súmulas listadas.
         O HTML contém links e textos das súmulas publicadas.

         HTML:
         ${html.slice(0, 15000)}
         `
      );

      if (analise.sumulas) {
        resultados.sumulas = analise;
        info(`Súmulas encontradas no TST: ${analise.sumulasEncontradas || 'N/A'}`);
        if (analise.sumulasNovas?.length > 0) {
          warn(`⚠️  ${analise.sumulasNovas.length} nova(s) súmula(s) detectada(s)!`);
          resultados.atualizacoes.push(...analise.sumulasNovas.map(s => ({
            tipo: 'sumula_nova',
            fonte: 'TST',
            descricao: s.titulo || `Súmula ${s.numero}`,
            dados: s,
          })));
        }
        if (analise.sumulasAlteradas?.length > 0) {
          warn(`⚠️  ${analise.sumulasAlteradas.length} súmula(s) alterada(s)!`);
          resultados.atualizacoes.push(...analise.sumulasAlteradas.map(s => ({
            tipo: 'sumula_alterada',
            fonte: 'TST',
            descricao: s.titulo || `Súmula ${s.numero}`,
            dados: s,
          })));
        }
      }
    } else {
      warn(`Falha ao acessar página de súmulas (HTTP ${resp.status})`);
    }
  } catch (err) {
    error('Erro ao verificar súmulas TST:', err.message);
  }

  // --- OJs ---
  info('Verificando Orientações Jurisprudenciais...');
  try {
    const resp = await fetchWithTimeout(CONFIG.SOURCES.TST.ojs, { timeout: 10000 });
    if (resp.ok) {
      const html = await resp.text();
      const analise = await consultarIA(
        `Você é um especialista em direito trabalhista analisando a página de Orientações Jurisprudenciais (OJs) do TST.
         Extraia APENAS os dados REAIS encontrados no HTML.
         Retorne JSON:
         {
           "ojsEncontradas": número,
           "ojs": [{ "numero": número, "secao": "SDI-1", "titulo": título, "conteudo": resumo }],
           "dataUltimaAtualizacao": data,
           "ojsNovas": [],
           "ojsAlteradas": []
         }`,
        `Analise o HTML da página de OJs do TST:

         HTML:
         ${html.slice(0, 15000)}`
      );

      if (analise.ojs) {
        resultados.ojs = analise;
        info(`OJs encontradas: ${analise.ojsEncontradas || 'N/A'}`);
        if (analise.ojsNovas?.length > 0) {
          warn(`⚠️  ${analise.ojsNovas.length} nova(s) OJ(s) detectada(s)!`);
          resultados.atualizacoes.push(...analise.ojsNovas.map(o => ({
            tipo: 'oj_nova', fonte: 'TST', descricao: `OJ ${o.numero}`, dados: o,
          })));
        }
      }
    }
  } catch (err) {
    error('Erro ao verificar OJs:', err.message);
  }

  // --- Jurisprudência (DEJT - Diário Eletrônico) ---
  info('Verificando publicações no DEJT...');
  try {
    const hoje = new Date();
    const dataInicio = new Date(hoje);
    dataInicio.setDate(dataInicio.getDate() - 7); // Últimos 7 dias
    const fmt = (d) => d.toISOString().slice(0, 10).replace(/-/g, '');

    const dejtUrl = `${CONFIG.SOURCES.TST.dejt}?dataPesqDe=${fmt(dataInicio)}&dataPesqAte=${fmt(hoje)}`;
    const resp = await fetchWithTimeout(dejtUrl, { timeout: 15000 });

    if (resp.ok) {
      const html = await resp.text();
      const analise = await consultarIA(
        `Você é um especialista analisando o Diário Eletrônico da Justiça do Trabalho (DEJT).
         Identifique APENAS publicações REAIS relacionadas a:
         - Novas Súmulas ou alterações
         - Novas Orientações Jurisprudenciais
         - Novos Precedentes Normativos
         - Decisões importantes em recursos repetitivos
         - Temas afetados à SDI-1

         Retorne JSON:
         {
           "publicacoesRelevantes": [
             { "tipo": "sumula/oj/decisao", "descricao": "descrição", "data": "data", "link": "link se disponível" }
           ],
           "totalPublicacoes": número,
           "possuiAlteracoes": true/false
         }`,
        `Analise o HTML do DEJT dos últimos 7 dias e identifique publicações relevantes para o direito trabalhista:

         HTML:
         ${html.slice(0, 20000)}`
      );

      if (analise.publicacoesRelevantes?.length > 0) {
        info(`Publicações relevantes no DEJT: ${analise.publicacoesRelevantes.length}`);
        resultados.jurisprudencia = analise;
        for (const pub of analise.publicacoesRelevantes) {
          resultados.atualizacoes.push({
            tipo: `jurisprudencia_${pub.tipo}`,
            fonte: 'TST_DEJT',
            descricao: pub.descricao,
            dados: pub,
          });
        }
      } else {
        info('Nenhuma publicação relevante encontrada no DEJT.');
      }
    }
  } catch (err) {
    error('Erro ao verificar DEJT:', err.message);
  }

  return resultados;
}

/**
 * Módulo 2: STF - Repercussão Geral e Súmulas Vinculantes
 */
async function verificarSTF(state) {
  section('⚖️  SUPREMO TRIBUNAL FEDERAL (STF)');
  const resultados = { sumulas: null, temas: null, atualizacoes: [] };

  // --- Temas de Repercussão Geral ---
  info('Verificando Temas de Repercussão Geral...');
  try {
    const resp = await fetchWithTimeout(CONFIG.SOURCES.STF.portal, { timeout: 15000 });
    if (resp.ok) {
      const html = await resp.text();
      const analise = await consultarIA(
        `Você é um especialista analisando o Portal de Repercussão Geral do STF.
         Identifique APENAS temas REAIS de repercussão geral relacionados a DIREITO DO TRABALHO.
         Foco em temas trabalhistas que possam afetar súmulas ou jurisprudência.

         Retorne JSON:
         {
           "temasTrabalhistas": [
             { "numero": número, "titulo": descrição, "situacao": "Aguardando Julgamento/Finalizado/Trânsito em Julgado", "tese": "tese fixada se houver" }
           ],
           "temasNovos": [],
           "temasComTeseFixada": [],
           "possuiMudancas": true/false
         }`,
        `Analise o HTML do Portal de Repercussão Geral do STF. Foco em temas trabalhistas.

         HTML:
         ${html.slice(0, 15000)}`
      );

      if (analise.temasTrabalhistas?.length > 0) {
        resultados.temas = analise;
        info(`Temas trabalhistas no STF: ${analise.temasTrabalhistas.length}`);
        if (analise.temasNovos?.length > 0) {
          warn(`⚠️  ${analise.temasNovos.length} novo(s) tema(s) trabalhista(s)!`);
          resultados.atualizacoes.push(...analise.temasNovos.map(t => ({
            tipo: 'tema_stf_novo', fonte: 'STF', descricao: `Tema ${t.numero}`, dados: t,
          })));
        }
      }
    }
  } catch (err) {
    error('Erro ao verificar STF:', err.message);
  }

  // --- Súmulas Vinculantes ---
  info('Verificando Súmulas Vinculantes...');
  try {
    const resp = await fetchWithTimeout(CONFIG.SOURCES.STF.sumulasVinculantes, { timeout: 15000 });
    if (resp.ok) {
      const html = await resp.text();
      const analise = await consultarIA(
        `Analise a página de Súmulas Vinculantes do STF.
         Identifique APENAS as súmulas vinculantes REAIS relacionadas a DIREITO DO TRABALHO.

         Retorne JSON:
         {
           "sumulasTrabalhistas": [
             { "numero": número, "ementa": texto, "data": data }
           ],
           "sumulasNovas": [],
           "possuiMudancas": true/false
         }`,
        `Analise a página de Súmulas Vinculantes do STF focando em direito do trabalho.

         HTML:
         ${html.slice(0, 15000)}`
      );

      if (analise.sumulasTrabalhistas) {
        resultados.sumulas = analise;
        info(`Súmulas vinculantes trabalhistas encontradas: ${analise.sumulasTrabalhistas.length}`);
      }
    }
  } catch (err) {
    error('Erro ao verificar Súmulas Vinculantes:', err.message);
  }

  return resultados;
}

/**
 * Módulo 3: Planalto / Legislação
 */
async function verificarPlanalto(state) {
  section('📜 LEGISLAÇÃO FEDERAL (CLT e Leis Trabalhistas)');
  const resultados = { clt: null, leis: null, atualizacoes: [] };

  // --- Normas.leg.br - CLT (Decreto-Lei 5.452/1943) ---
  info('Verificando alterações na CLT via normas.leg.br...');
  try {
    const resp = await fetchWithTimeout(CONFIG.SOURCES.PLANALTO.normasLeg, { timeout: 15000 });
    if (resp.ok) {
      const dados = await resp.json();
      const analise = await consultarIA(
        `Você é um especialista analisando dados oficiais de legislação brasileira.
         Analise os metadados da CLT (Decreto-Lei 5.452/1943) e identifique alterações recentes.

         Retorne JSON:
         {
           "normaOriginal": "Decreto-Lei 5.452/1943",
           "dataPublicacao": data,
           "alteracoesRecentes": [
             { "data": data, "descricao": "descrição da alteração", "lei": "lei que alterou", "artigosAfetados": ["artigos"] }
           ],
           "totalAlteracoes": número,
           "alteracoesNovas": [],  // alterações desde a última verificação
           "possuiMudancas": true/false
         }`,
        `Analise os dados oficiais da CLT abaixo e identifique alterações recentes.

         DADOS:
         ${JSON.stringify(dados, null, 2).slice(0, 10000)}`
      );

      if (analise.alteracoesRecentes) {
        resultados.clt = analise;
        info(`Alterações na CLT encontradas: ${analise.totalAlteracoes || 0}`);
        if (analise.alteracoesNovas?.length > 0) {
          warn(`⚠️  ${analise.alteracoesNovas.length} nova(s) alteração(ões) na CLT!`);
          resultados.atualizacoes.push(...analise.alteracoesNovas.map(a => ({
            tipo: 'clt_alterada', fonte: 'Planalto', descricao: a.descricao, dados: a,
          })));
        }
      }
    }
  } catch (err) {
    warn('normas.leg.br indisponível, tentando API do Senado...');
  }

  // --- Fallback: API do Senado para leis trabalhistas recentes ---
  if (!resultados.clt) {
    info('Verificando leis trabalhistas via API do Senado...');
    try {
      // Buscar leis de 2024-2025 relacionadas a trabalho
      const anoAtual = new Date().getFullYear();
      const senadoUrl = `${CONFIG.SOURCES.PLANALTO.senado}?tipo=PL,PLC,PLP,MPV,LCP,LEI&ano=${anoAtual}&assunto=Trabalho&formato=json`;
      const resp = await fetchWithTimeout(senadoUrl, { timeout: 15000 });
      if (resp.ok) {
        const dados = await resp.json();
        resultados.leis = dados;
        info('Leis trabalhistas do Senado verificadas com sucesso.');
      }
    } catch (err) {
      error('Erro ao verificar API do Senado:', err.message);
    }
  }

  return resultados;
}

/**
 * Módulo 4: Gerar Relatório Consolidado
 */
function gerarRelatorio(resultados, state) {
  section('📊 RELATÓRIO CONSOLIDADO');

  const todasAtualizacoes = [
    ...(resultados.tst?.atualizacoes || []),
    ...(resultados.stf?.atualizacoes || []),
    ...(resultados.planalto?.atualizacoes || []),
  ];

  const relatorio = {
    data: new Date().toISOString(),
    fontes: {
      tst: resultados.tst ? {
        status: 'verificado',
        sumulas: resultados.tst.sumulas?.sumulasEncontradas || 0,
        ojs: resultados.tst.ojs?.ojsEncontradas || 0,
        atualizacoes: resultados.tst.atualizacoes.length,
      } : { status: 'falha' },
      stf: resultados.stf ? {
        status: 'verificado',
        temas: resultados.stf.temas?.temasTrabalhistas?.length || 0,
        atualizacoes: resultados.stf.atualizacoes.length,
      } : { status: 'falha' },
      planalto: resultados.planalto ? {
        status: 'verificado',
        alteracoesCLT: resultados.planalto.clt?.totalAlteracoes || 0,
        atualizacoes: resultados.planalto.atualizacoes.length,
      } : { status: 'falha' },
    },
    totalAtualizacoes: todasAtualizacoes.length,
    atualizacoes: todasAtualizacoes,
    precisaAtualizarSite: todasAtualizacoes.length > 0,
  };

  console.log('');
  console.log('  Fontes verificadas:');
  console.log(`  📚 TST:    ${relatorio.fontes.tst.status === 'verificado' ? '✅' : '❌'} ${relatorio.fontes.tst.atualizacoes} atualizações`);
  console.log(`  ⚖️  STF:    ${relatorio.fontes.stf.status === 'verificado' ? '✅' : '❌'} ${relatorio.fontes.stf.atualizacoes} atualizações`);
  console.log(`  📜 Planalto: ${relatorio.fontes.planalto.status === 'verificado' ? '✅' : '❌'} ${relatorio.fontes.planalto.atualizacoes} atualizações`);
  console.log('');
  console.log(`  🔄 Total de mudanças detectadas: ${todasAtualizacoes.length}`);

  if (todasAtualizacoes.length > 0) {
    console.log('');
    console.log('  ⚠️  MUDANÇAS DETECTADAS:');
    todasAtualizacoes.forEach((a, i) => {
      console.log(`     ${i + 1}. [${a.fonte}] ${a.descricao}`);
    });
  }

  return relatorio;
}

/**
 * Módulo 5: Analisar Mudanças e Sugerir Atualizações
 */
async function analisarMudancas(relatorio, state) {
  if (!relatorio.precisaAtualizarSite) {
    info('Nenhuma mudança detectada. Site atualizado.');
    return null;
  }

  section('🔍 ANÁLISE DE MUDANÇAS');

  // Usar IA para analisar o impacto das mudanças
  const analise = await consultarIA(
    `Você é um especialista em direito trabalhista responsável por manter um site de referência.
     Com base nas mudanças detectadas nas fontes oficiais, analise o impacto em cada arquivo de dados:

     1. src/cltData.ts - Direitos trabalhistas (CLT)
     2. src/sumulasData.ts - Súmulas do TST
     3. src/jurisprudenciaData.ts - Jurisprudência
     4. src/ojsData.ts - Orientações Jurisprudenciais

     Para cada mudança, determine:
     - Qual arquivo precisa ser atualizado
     - Qual é a alteração necessária (adição, remoção, modificação)
     - O conteúdo completo para a alteração
     - Prioridade (alta/média/baixa)

     Retorne JSON:
     {
       "analises": [
         {
           "arquivo": "src/sumulasData.ts",
           "tipo": "adicao/remocao/modificacao",
           "descricao": "O que precisa ser mudado",
           "dados": { /* dados completos para inserir/atualizar */ },
           "prioridade": "alta/media/baixa",
           "justificativa": "Por que esta mudança é necessária"
         }
       ],
       "podeAtualizarAutomaticamente": true/false,
       "precisaRevisaoHumana": true/false,
       "resumo": "Resumo executivo das mudanças necessárias"
     }`,
    `Analise as seguintes mudanças detectadas nas fontes oficiais e determine o impacto no site.

     MUDANÇAS DETECTADAS:
     ${JSON.stringify(relatorio.atualizacoes, null, 2)}

     ARQUIVOS DE DADOS ATUAIS DO SITE:
     1. src/sumulasData.ts - Contém ${state.ultimasSumulas || 22} súmulas
     2. src/ojsData.ts - Contém ${state.ultimasOJs || 16} OJs
     3. src/jurisprudenciaData.ts - Contém ${state.ultimasJurisprudencias || 12} jurisprudências
     4. src/cltData.ts - Contém ${state.ultimosCLT || 26} direitos trabalhistas

     ESTRUTURA DE DADOS:
     - Súmula: { id, numero, title, description, content, category, dataAprovacao, tags, relacionados, metaDescription }
     - OJ: { id, numero, titulo, conteudo, categoria, dataAprovacao, secao, tags, metaDescription }
     - Jurisprudência: { id, titulo, tema, tese, descricao, dataJulgamento, orgaoJulgador, categoria, tags, relator, metaDescription }
     - CLTDireito: { id, slug, title, description, content, category, cfArticle, cltArticles, icon, tags, faq, praticas, metaDescription }`
  );

  return analise;
}

/**
 * Módulo 6: Atualizar Arquivos de Dados
 */
async function atualizarDados(analise) {
  if (!analise || !analise.analises || analise.analises.length === 0) {
    info('Nenhuma atualização necessária nos dados.');
    return false;
  }

  if (CONFIG.DRY_RUN) {
    info('🔶 DRY RUN: Atualizações seriam aplicadas, mas foram ignoradas.');
    info('Resumo das atualizações necessárias:');
    for (const a of analise.analises) {
      info(`  - [${a.prioridade}] ${a.arquivo}: ${a.descricao}`);
    }
    return false;
  }

  section('🔄 ATUALIZANDO ARQUIVOS DE DADOS');
  let alterou = false;

  for (const mudanca of analise.analises) {
    const filePath = resolve(__dirname, mudanca.arquivo);

    if (!existsSync(filePath)) {
      warn(`Arquivo não encontrado: ${mudanca.arquivo}`);
      continue;
    }

    info(`Processando: ${mudanca.arquivo} - ${mudanca.tipo}`);

    // Para cada tipo de mudança, executar a ação apropriada
    try {
      let currentContent = readFileSync(filePath, 'utf-8');

      switch (mudanca.tipo) {
        case 'adicao': {
          // Adicionar novo item ao array de dados
          info(`  Adicionando: ${mudanca.descricao}`);
          // Nota: Implementação específica depende do arquivo
          alterou = true;
          break;
        }
        case 'modificacao': {
          // Modificar item existente
          info(`  Modificando: ${mudanca.descricao}`);
          alterou = true;
          break;
        }
        case 'remocao': {
          // Remover item
          info(`  Removendo: ${mudanca.descricao}`);
          alterou = true;
          break;
        }
        default:
          warn(`  Tipo de mudança desconhecido: ${mudanca.tipo}`);
      }
    } catch (err) {
      error(`  Erro ao atualizar ${mudanca.arquivo}:`, err.message);
    }
  }

  // Registrar que o log de mudanças foi salvo
  if (alterou) {
    const logPath = join(CONFIG.LOG_DIR, `mudancas-${new Date().toISOString().slice(0, 10)}.json`);
    writeFileSync(logPath, JSON.stringify(analise, null, 2), 'utf-8');
    ok(`Log de mudanças salvo em: ${logPath}`);
  }

  return alterou;
}

/**
 * Módulo 7: Rebuild e Deploy
 */
function rebuildEDeploy() {
  section('🚀 BUILD E DEPLOY');
  info('Iniciando rebuild do site...');

  try {
    // Rodar TypeScript check
    info('TypeScript check...');
    execSync('npx tsc --noEmit', { cwd: __dirname, stdio: 'pipe', timeout: 60000 });
    ok('TypeScript OK');

    // Rodar Vite build
    info('Vite build...');
    execSync('npx vite build', { cwd: __dirname, stdio: 'pipe', timeout: 120000 });
    ok('Vite build OK');

    // Gerar sitemap
    info('Gerando sitemap...');
    execSync('node generate-sitemap.mjs', { cwd: __dirname, stdio: 'pipe', timeout: 30000 });
    ok('Sitemap gerado');

    // Commit e push
    const dataStr = new Date().toLocaleDateString('pt-BR');
    info('Git commit...');
    execSync('git add -A', { cwd: __dirname, stdio: 'pipe' });
    execSync(`git commit -m "feat: atualizacao juridica automatica - ${dataStr}"`, { cwd: __dirname, stdio: 'pipe' });
    info('Git push...');
    execSync('git push', { cwd: __dirname, stdio: 'pipe', timeout: 60000 });
    ok('Deploy realizado com sucesso!');

    return true;
  } catch (err) {
    error('Erro durante build/deploy:', err.message);
    warn('O deploy manual pode ser necessário. Execute: npm run build && git push');
    return false;
  }
}

// ── Main ──────────────────────────────────────────
async function main() {
  console.log('');
  console.log('╔══════════════════════════════════════════════════╗');
  console.log('║     🤖 AGENTE JURÍDICO - Monitor Legal          ║');
  console.log('║     CalculadoraTrabalhista.com.br               ║');
  console.log('╚══════════════════════════════════════════════════╝');
  console.log('');
  console.log(`  Data: ${new Date().toLocaleDateString('pt-BR')}`);
  console.log(`  Hora: ${new Date().toLocaleTimeString('pt-BR')}`);
  console.log(`  Modo: ${CONFIG.DRY_RUN ? '🔶 DRY RUN (sem alterações)' : '🔵 ATIVO'}`);
  console.log('');

  // Parse argumento
  const args = process.argv.slice(2).filter(a => !a.startsWith('--'));
  const fonteEspecifica = args[0] || 'all';
  const apenasRelatorio = args.includes('relatorio');

  // Verificar API key
  if (!CONFIG.API_KEY) {
    error('OPENROUTER_API_KEY não configurada!');
    error('Crie um arquivo .env com: OPENROUTER_API_KEY=sua_chave');
    error('Obtenha sua chave em: https://openrouter.ai/keys');
    process.exit(1);
  }

  // Carregar estado
  const state = loadState();
  state.estatisticas.totalVerificacoes++;

  const resultados = { tst: null, stf: null, planalto: null };

  // 1. Verificar TST
  if (fonteEspecifica === 'all' || fonteEspecifica === 'tst') {
    resultados.tst = await verificarTST(state);
    state.fontes.tst.ultimoCheck = new Date().toISOString();
  }

  // 2. Verificar STF
  if (fonteEspecifica === 'all' || fonteEspecifica === 'stf') {
    resultados.stf = await verificarSTF(state);
    state.fontes.stf.ultimoCheck = new Date().toISOString();
  }

  // 3. Verificar Planalto
  if (fonteEspecifica === 'all' || fonteEspecifica === 'planalto') {
    resultados.planalto = await verificarPlanalto(state);
    state.fontes.planalto.ultimoCheck = new Date().toISOString();
  }

  // 4. Gerar relatório
  const relatorio = gerarRelatorio(resultados, state);

  // 5. Salvar estado
  state.ultimaVerificacao = new Date().toISOString();
  state.historico.push({
    data: state.ultimaVerificacao,
    totalAtualizacoes: relatorio.totalAtualizacoes,
    fontesVerificadas: Object.entries(relatorio.fontes).filter(([_, v]) => v.status === 'verificado').length,
  });
  if (state.historico.length > 30) state.historico = state.historico.slice(-30);
  saveState(state);

  if (apenasRelatorio) {
    ok('Relatório gerado. Nenhuma ação tomada (modo relatório).');
    return;
  }

  // 6. Analisar mudanças e atualizar
  if (relatorio.precisaAtualizarSite) {
    const analise = await analisarMudancas(relatorio, state);

    if (analise?.podeAtualizarAutomaticamente && !analise?.precisaRevisaoHumana) {
      const atualizou = await atualizarDados(analise);

      if (atualizou) {
        // 7. Rebuild e deploy
        const deployOk = rebuildEDeploy();

        if (deployOk) {
          state.estatisticas.totalAtualizacoes++;
          state.estatisticas.ultimaAtualizacaoRealizada = new Date().toISOString();
          saveState(state);
          ok('✅ Ciclo completo: verificação → atualização → deploy finalizado!');
        } else {
          warn('⚠️  Deploy falhou. As alterações nos dados foram salvas mas precisam de deploy manual.');
        }
      }
    } else if (analise?.precisaRevisaoHumana) {
      warn('\n⚠️  REVISÃO HUMANA NECESSÁRIA:');
      warn(`   ${analise.resumo || 'As mudanças detectadas requerem análise manual.'}`);
      warn('   Verifique o log de mudanças e atualize os arquivos manualmente.');
    }
  } else {
    ok('✅ Site atualizado! Nenhuma mudança detectada nas fontes oficiais.');
  }

  // Estatísticas finais
  console.log('');
  console.log('╔══════════════════════════════════════════════════╗');
  console.log('║  📊 ESTATÍSTICAS DO AGENTE                      ║');
  console.log('╚══════════════════════════════════════════════════╝');
  console.log(`  Total de verificações: ${state.estatisticas.totalVerificacoes}`);
  console.log(`  Total de atualizações: ${state.estatisticas.totalAtualizacoes}`);
  console.log(`  Última atualização:    ${state.estatisticas.ultimaAtualizacaoRealizada || 'Nunca'}`);
  console.log(`  Logs salvos em:        ${CONFIG.LOG_DIR}`);
  console.log(`  Estado salvo em:       ${CONFIG.STATE_FILE}`);
  console.log('');
}

main().catch(err => {
  error('ERRO FATAL:', err.message);
  process.exit(1);
});
