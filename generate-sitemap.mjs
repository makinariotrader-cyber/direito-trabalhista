import { writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const BASE = 'https://www.calculadoratrabalhista.com.br';

// Tools
const tools = [
  'rescisao-trabalhista', 'horas-extras', 'adicional-noturno', 'ferias',
  'decimo-terceiro', 'fgts', 'multa-fgts', 'aviso-previo', 'inss',
  'salario-liquido', 'seguro-desemprego', 'juros-compostos', 'correcao-monetaria',
  'adicional-periculosidade', 'adicional-insalubridade', 'hora-extra-noturna',
  'dsr', 'vale-transporte', 'participacao-lucros', 'adicional-transferencia',
];

// Guides
const guides = [
  'direitos-trabalhistas', 'como-calcular-horas-extras', 'diferencas-clt-pj',
  'guia-fgts', 'passo-rescisao',
];

// Blog slugs - extracted from blogData.ts
const blogSlugs = [
  'reforma-trabalhista-2025-mudancas',
  'como-calcular-horas-extras-corretamente',
  'direito-a-ferias-tudo-que-voce-precisa-saber',
  'fgts-saques-regras-2025',
  'seguro-desemprego-regras-2025-parcelas-valores',
  'diferenca-adicional-periculosidade-insalubridade',
  'intervalo-intrajornada-e-interjornada-entenda-as-regras-da-clt',
  'intervalo-intrajornada-e-interjornada-regras-da-clt',
];

// CLT slugs - extracted from cltData.ts
const cltSlugs = [
  'salario-minimo', 'carteira-de-trabalho-ctps', 'jornada-de-trabalho-clt',
  'horas-extras-direito-trabalhista', 'decimo-terceiro-salario',
  'ferias-direito-trabalhador', 'fgts-direitos-trabalhador',
  'repouso-semanal-remunerado', 'aviso-previo-direito-trabalhista',
  'adicional-noturno-regras-clt', 'adicional-de-insalubridade',
  'adicional-de-periculosidade', 'seguro-desemprego-direito',
  'intervalo-intrajornada-clt', 'licenca-maternidade-direito',
  'licenca-paternidade', 'vale-transporte-direito',
  'terceirizacao-direitos-trabalhador', 'reforma-trabalhista-lei-13467',
  'estabilidade-provisoria-emprego', 'rescisao-contratual-tipos-verbas',
  'prazo-prescricional-trabalhista', 'equiparacao-salarial-direito',
  'trabalho-noturno-regras',
];

// Súmula IDs - extracted from sumulasData.ts
const sumulaSlugs = [
  'sumula-6', 'sumula-27', 'sumula-32', 'sumula-47', 'sumula-51',
  'sumula-90', 'sumula-102', 'sumula-126', 'sumula-146', 'sumula-159',
  'sumula-212', 'sumula-264', 'sumula-331', 'sumula-338', 'sumula-363',
  'sumula-369', 'sumula-378', 'sumula-437', 'sumula-443', 'sumula-461',
  'sumula-60', 'sumula-244',
];

// Jurisprudência IDs - extracted from jurisprudenciaData.ts
const jurisprudenciaSlugs = [
  'tema-127', 'tema-120', 'tema-118', 'tema-121', 'tema-119',
  'tema-125', 'tema-128', 'tema-122', 'tema-126', 'incidente-adesao-2024',
  'tema-1046-stf', 'tema-152',
];

// OJ IDs - extracted from ojsData.ts
const ojSlugs = [
  'oj-394-sdi1', 'oj-97-sdi1', 'oj-101-sdi1', 'oj-115-sdi1',
  'oj-173-sdi1', 'oj-342-sdi1', 'oj-245-sdi1', 'oj-351-sdi1',
  'oj-397-sdi1', 'oj-398-sdi1', 'oj-400-sdi1', 'oj-404-sdi1',
  'oj-410-sdi1', 'oj-417-sdi1', 'oj-423-sdi1', 'oj-424-sdi1',
];

const pages = [
  // Main pages
  { loc: '/', priority: '1.0' },
  { loc: '/ferramentas', priority: '0.9' },
  { loc: '/guias', priority: '0.8' },
  { loc: '/blog', priority: '0.8' },
  { loc: '/clt', priority: '0.9' },
  { loc: '/sumulas', priority: '0.9' },
  { loc: '/jurisprudencia', priority: '0.9' },
  { loc: '/ojs', priority: '0.9' },
  { loc: '/sobre', priority: '0.5' },
  { loc: '/contato', priority: '0.4' },
  { loc: '/privacidade', priority: '0.3' },
  { loc: '/termos', priority: '0.3' },
  // Tools
  ...tools.map(id => ({ loc: `/ferramentas/${id}`, priority: '0.9' })),
  // Guides
  ...guides.map(id => ({ loc: `/guias/${id}`, priority: '0.7' })),
  // Blog
  ...blogSlugs.map(slug => ({ loc: `/blog/${slug}`, priority: '0.7' })),
  // CLT - 24 direitos
  ...cltSlugs.map(slug => ({ loc: `/clt/${slug}`, priority: '0.8' })),
  // Súmulas - 22 itens
  ...sumulaSlugs.map(id => ({ loc: `/sumulas/${id}`, priority: '0.8' })),
  // Jurisprudência - 12 itens
  ...jurisprudenciaSlugs.map(id => ({ loc: `/jurisprudencia/${id}`, priority: '0.8' })),
  // OJs - 16 itens
  ...ojSlugs.map(id => ({ loc: `/ojs/${id}`, priority: '0.8' })),
];

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
for (const p of pages) {
  xml += '  <url>\n';
  xml += `    <loc>${BASE}${p.loc}</loc>\n`;
  xml += `    <priority>${p.priority}</priority>\n`;
  xml += '    <changefreq>monthly</changefreq>\n';
  xml += '  </url>\n';
}
xml += '</urlset>\n';

const outDir = resolve(__dirname, 'dist');
mkdirSync(outDir, { recursive: true });
writeFileSync(resolve(outDir, 'sitemap.xml'), xml, 'utf-8');
console.log(`Sitemap gerado: ${pages.length} URLs em dist/sitemap.xml`);
