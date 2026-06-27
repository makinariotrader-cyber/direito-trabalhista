/**
 * Agente Redator - Gera artigos para o Blog da Calculadora Trabalhista
 * 
 * Uso: node agente-redator.mjs
 * 
 * Este script gera um novo post de blog sobre direito trabalhista usando
 * a API do OpenRouter (Gemini/DeepSeek) com dados de fontes oficiais.
 * 
 * Para agendar 3x por semana (seg, qua, sex):
 * - Linux/Mac: adicione ao crontab
 * - Windows: use o Agendador de Tarefas
 * 
 * Variáveis de ambiente necessárias:
 *   OPENROUTER_API_KEY  - Chave da API OpenRouter (obter em https://openrouter.ai/keys)
 *   SITE_URL            - URL do site (padrão: https://www.calculadoratrabalhista.com.br)
 * 
 * Opcional:
 *   GEMINI_API_KEY - Como alternativa ao OpenRouter
 */

import { writeFileSync, mkdirSync, readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Configuração
const MODEL = process.env.MODEL || 'google/gemini-2.0-flash-001';
const SITE_URL = process.env.SITE_URL || 'https://www.calculadoratrabalhista.com.br';
const API_KEY = process.env.OPENROUTER_API_KEY || process.env.GEMINI_API_KEY;

// Categorias do blog
const CATEGORIES = [
  'Legislação',
  'Jornada de Trabalho',
  'Benefícios',
  'Rescisão e Saída',
  'Adicionais Salariais',
  'Finanças e Correção',
];

// Tópicos sugeridos (rotacionados automaticamente)
const TOPICS = [
  'Cálculo de adicional noturno: guia completo com exemplos práticos',
  'Diferença entre hora extra e banco de horas: o que diz a CLT?',
  'Guia completo do aviso prévio: trabalhado, indenizado e proporcional',
  'Salário mínimo vs piso salarial: entenda a diferença',
  'Como funciona a estabilidade provisória no emprego? (gestante, CIP e acidente)',
  'Direitos do trabalhador em contrato de experiência',
  'Tudo sobre o saque do PIS/PASEP 2025: valores e calendário',
  'Aposentadoria por idade: requisitos, cálculo e documentos necessários',
  'Contribuição sindical 2025: obrigatoriedade e regras atuais',
  'Jornada 12x36: como funciona e quais os direitos do trabalhador',
  'Guia completo do vale-transporte: regras, descontos e benefícios',
  'Como funciona a Participação nos Lucros e Resultados (PLR)?',
  'Direitos do trabalhador doméstico 2025: o que mudou?',
  'Trabalho em feriados: regras e remuneração correta',
  'Rescisão indireta: quando o empregador comete falta grave e o que fazer',
  'Guia completo do saque-aniversário FGTS: vantagens e desvantagens',
  'Correção monetária de débitos trabalhistas: IPCA, TR ou INPC?',
  'Direitos do trabalhador em caso de falência da empresa',
  'Horas in itinere: o tempo de deslocamento até o trabalho conta?',
  'Intervalo intrajornada e interjornada: regras da CLT',
];

// Ferramentas do site para interlinks
const TOOLS_FOR_INTERLINKS = [
  { text: 'Calculadora de Rescisão Trabalhista', to: '/ferramentas/rescisao-trabalhista' },
  { text: 'Calculadora de Horas Extras', to: '/ferramentas/horas-extras' },
  { text: 'Calculadora de Adicional Noturno', to: '/ferramentas/adicional-noturno' },
  { text: 'Calculadora de Férias', to: '/ferramentas/ferias' },
  { text: 'Calculadora de 13º Salário', to: '/ferramentas/decimo-terceiro' },
  { text: 'Calculadora de FGTS', to: '/ferramentas/fgts' },
  { text: 'Calculadora de Multa FGTS', to: '/ferramentas/multa-fgts' },
  { text: 'Calculadora de Aviso Prévio', to: '/ferramentas/aviso-previo' },
  { text: 'Calculadora de INSS', to: '/ferramentas/inss' },
  { text: 'Calculadora de Salário Líquido', to: '/ferramentas/salario-liquido' },
  { text: 'Calculadora de Seguro-Desemprego', to: '/ferramentas/seguro-desemprego' },
  { text: 'Calculadora de Juros Compostos', to: '/ferramentas/juros-compostos' },
  { text: 'Calculadora de Correção Monetária', to: '/ferramentas/correcao-monetaria' },
  { text: 'Calculadora de Periculosidade', to: '/ferramentas/adicional-periculosidade' },
  { text: 'Calculadora de Insalubridade', to: '/ferramentas/adicional-insalubridade' },
  { text: 'Calculadora de Hora Extra Noturna', to: '/ferramentas/hora-extra-noturna' },
  { text: 'Calculadora de DSR', to: '/ferramentas/dsr' },
];

// Guias do site para interlinks
const GUIDES_FOR_INTERLINKS = [
  { text: 'Guia de Direitos Trabalhistas', to: '/guias/direitos-trabalhistas' },
  { text: 'Guia: Como Calcular Horas Extras', to: '/guias/como-calcular-horas-extras' },
  { text: 'Guia: CLT vs PJ', to: '/guias/diferencas-clt-pj' },
  { text: 'Guia Completo do FGTS', to: '/guias/guia-fgts' },
  { text: 'Passo a Passo da Rescisão', to: '/guias/passo-rescisao' },
];

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function generatePost() {
  if (!API_KEY) {
    console.error('❌ ERRO: Defina a variável OPENROUTER_API_KEY (ou GEMINI_API_KEY)');
    console.error('   Obtenha sua chave em: https://openrouter.ai/keys');
    process.exit(1);
  }

  // Selecionar tópico baseado na data (rotaciona automaticamente)
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  const topicIndex = dayOfYear % TOPICS.length;
  const topic = TOPICS[topicIndex];
  
  // Selecionar categoria relacionada ao tópico
  const categoryIndex = topicIndex % CATEGORIES.length;
  const category = CATEGORIES[categoryIndex];

  // Selecionar interlinks relevantes (2 ferramentas + 1 guia)
  const toolLinks = TOOLS_FOR_INTERLINKS
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);
  const guideLinks = GUIDES_FOR_INTERLINKS
    .sort(() => Math.random() - 0.5)
    .slice(0, 1);
  const interlinks = [...toolLinks, ...guideLinks];

  const prompt = `Você é um redator especializado em direito trabalhista brasileiro.

Crie um artigo de blog para o site "Calculadora Trabalhista" (${SITE_URL}).

TÓPICO: ${topic}
CATEGORIA: ${category}

REGRAS IMPORTANTES:
1. O artigo deve ter 800 a 1000 caracteres no total (conteúdo principal, sem contar FAQ)
2. Use APENAS dados reais e verificáveis de fontes oficiais brasileiras:
   - CLT (Consolidação das Leis do Trabalho) - artigos específicos
   - Constituição Federal - artigos específicos
   - Leis federais (ex: Lei 8.036/1990, Lei 7.998/1990, Lei 12.506/2011)
   - Normas Regulamentadoras (NR-15, NR-16) do Ministério do Trabalho
   - Súmulas do TST (Tribunal Superior do Trabalho)
   - Portarias interministeriais (valores de salário mínimo, teto INSS, etc.)
   - Dados oficiais do IBGE, Caixa Econômica Federal, Ministério do Trabalho
3. NÃO invente dados, valores ou prazos. Use parâmetros reais de 2025:
   - Salário mínimo 2025: R$ 1.518,00
   - Teto INSS 2025: R$ 8.157,41
4. Termine o artigo principal com uma chamada para usar a calculadora relacionada no site
5. Crie 2 a 3 perguntas frequentes (FAQ) sobre o tema com respostas completas
6. Gere 3 tags relevantes para o artigo

Formato de saída (JSON puro, sem markdown):
{
  "title": "Título do artigo (SEO-friendly, máximo 65 caracteres)",
  "excerpt": "Resumo do artigo (máximo 160 caracteres)",
  "content": "Conteúdo completo do artigo (800 a 1000 caracteres, parágrafos separados por \\n\\n, com dados de fontes oficiais e links para calculadoras quando mencionar cálculos)",
  "faq": [
    { "question": "Pergunta 1?", "answer": "Resposta completa da pergunta 1" },
    { "question": "Pergunta 2?", "answer": "Resposta completa da pergunta 2" }
  ],
  "tags": ["tag1", "tag2", "tag3"],
  "metaDescription": "Meta description para SEO (máximo 160 caracteres)",
  "keywords": ["palavra-chave 1", "palavra-chave 2", "palavra-chave 3"]
}`;

  console.log(`📝 Gerando artigo sobre: ${topic}...`);
  console.log(`   Categoria: ${category}`);
  console.log(`   Modelo: ${MODEL}`);

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': SITE_URL,
        'X-Title': 'Calculadora Trabalhista - Agente Redator',
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: 'system', content: 'Você é um redator técnico especializado em direito trabalhista brasileiro. Gere apenas JSON válido sem markdown.' },
          { role: 'user', content: prompt },
        ],
        temperature: 0.7,
        max_tokens: 4096,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`API Error ${response.status}: ${errText}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error('Resposta vazia da API');
    }

    // Extrair JSON da resposta
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Formato JSON não encontrado na resposta');
    }

    const post = JSON.parse(jsonMatch[0]);

    // Validar campos obrigatórios
    if (!post.title || !post.content || !post.faq) {
      throw new Error('Campos obrigatórios ausentes no JSON gerado');
    }

    // Montar o post completo
    const today = new Date().toISOString().split('T')[0];
    const slug = slugify(post.title);
    const fullPost = {
      id: slug,
      slug,
      title: post.title.slice(0, 65),
      excerpt: (post.excerpt || post.content.slice(0, 155)).slice(0, 160),
      content: post.content,
      author: 'Agente Redator Automático',
      date: today,
      category,
      tags: (post.tags || []).slice(0, 5),
      imageAlt: post.title,
      faq: (post.faq || []).slice(0, 3),
      interlinks,
      metaDescription: (post.metaDescription || post.excerpt || post.title).slice(0, 160),
      keywords: (post.keywords || post.tags || []).slice(0, 5),
    };

    return fullPost;
  } catch (error) {
    console.error(`❌ Erro ao gerar artigo: ${error.message}`);
    throw error;
  }
}

function savePost(post) {
  const postsDir = resolve(__dirname, 'src', 'generated-posts');
  mkdirSync(postsDir, { recursive: true });

  // Salvar como arquivo JSON individual
  const filePath = resolve(postsDir, `${post.slug}.json`);
  writeFileSync(filePath, JSON.stringify(post, null, 2), 'utf-8');
  console.log(`✅ Artigo salvo: ${filePath}`);

  // Atualizar o index.json (lista de todos os posts gerados)
  const indexFile = resolve(postsDir, 'index.json');
  let allPosts = [];
  if (existsSync(indexFile)) {
    try {
      allPosts = JSON.parse(readFileSync(indexFile, 'utf-8'));
    } catch {
      allPosts = [];
    }
  }
  
  // Evitar duplicatas
  const existingIndex = allPosts.findIndex(p => p.slug === post.slug);
  if (existingIndex >= 0) {
    allPosts[existingIndex] = post;
  } else {
    allPosts.push(post);
  }
  
  writeFileSync(indexFile, JSON.stringify(allPosts, null, 2), 'utf-8');
  console.log(`📚 Index atualizado: ${allPosts.length} posts no total`);

  return { filePath, totalPosts: allPosts.length };
}

function printScheduleInstructions() {
  console.log('\n═══════════════════════════════════════════');
  console.log('  📅 AGENDAR PARA 3x POR SEMANA');
  console.log('═══════════════════════════════════════════');
  console.log('');
  console.log('  🔹 Linux/Mac (crontab):');
  console.log('     crontab -e');
  console.log('     Adicione:');
  console.log('     # Seg, Qua, Sex às 08:00');
  console.log('     0 8 * * 1,3,5 cd ' + __dirname + ' && /usr/local/bin/node agente-redator.mjs >> logs/agente.log 2>&1');
  console.log('');
  console.log('  🔹 Windows (Agendador de Tarefas):');
  console.log('     1. Abra o Agendador de Tarefas');
  console.log('     2. Criar Tarefa > Acionadores: Semanal (seg, qua, sex)');
  console.log('     3. Ação: Iniciar programa');
  console.log(`        Programa: node.exe`);
  console.log(`        Argumentos: agente-redator.mjs`);
  console.log(`        Iniciar em: ${__dirname}`);
  console.log('');
  console.log('  🔹 Manualmente:');
  console.log(`     cd ${__dirname}`);
  console.log('     node agente-redator.mjs');
  console.log('');
  console.log('═══════════════════════════════════════════');
  console.log('  📌 IMPORTANTE:');
  console.log('  Após gerar posts, integre-os manualmente');
  console.log('  ao arquivo src/blogData.ts ou crie um');
  console.log('  script de integração automática.');
  console.log('═══════════════════════════════════════════');
}

async function main() {
  console.log('═══════════════════════════════════════════');
  console.log('  🤖 AGENTE REDATOR - Calculadora Trabalhista');
  console.log('═══════════════════════════════════════════');
  console.log(`  Data: ${new Date().toLocaleDateString('pt-BR')}`);
  console.log(`  Hora: ${new Date().toLocaleTimeString('pt-BR')}`);
  console.log('═══════════════════════════════════════════\n');

  try {
    const post = await generatePost();
    const { filePath, totalPosts } = savePost(post);

    console.log('\n✅ RESUMO:');
    console.log(`   Título: ${post.title}`);
    console.log(`   Categoria: ${post.category}`);
    console.log(`   Tags: ${post.tags.join(', ')}`);
    console.log(`   FAQ: ${post.faq.length} perguntas`);
    console.log(`   Interlinks: ${post.interlinks.length} links`);
    console.log(`   Total de posts gerados: ${totalPosts}`);

    printScheduleInstructions();
  } catch (error) {
    console.error(`\n❌ FALHA: ${error.message}`);
    process.exit(1);
  }
}

main();
