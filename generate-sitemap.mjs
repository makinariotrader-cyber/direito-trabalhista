import { writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const BASE = 'https://www.calculadoratrabalhista.com.br';

const tools = [
  'rescisao-trabalhista', 'horas-extras', 'adicional-noturno', 'ferias',
  'decimo-terceiro', 'fgts', 'multa-fgts', 'aviso-previo', 'inss',
  'salario-liquido', 'seguro-desemprego', 'juros-compostos', 'correcao-monetaria',
  'adicional-periculosidade', 'adicional-insalubridade', 'hora-extra-noturna',
  'dsr', 'vale-transporte', 'participacao-lucros', 'adicional-transferencia',
];

const guides = [
  'direitos-trabalhistas', 'como-calcular-horas-extras', 'diferencas-clt-pj',
  'guia-fgts', 'passo-rescisao',
];

const blogSlugs = [
  'reforma-trabalhista-2025-mudancas',
  'como-calcular-horas-extras-corretamente',
  'direito-a-ferias-tudo-que-voce-precisa-saber',
  'fgts-saques-regras-2025',
  'seguro-desemprego-regras-2025-parcelas-valores',
  'diferenca-adicional-periculosidade-insalubridade',
];

const pages = [
  { loc: '/', priority: '1.0' },
  { loc: '/ferramentas', priority: '0.9' },
  { loc: '/guias', priority: '0.8' },
  { loc: '/blog', priority: '0.8' },
  { loc: '/sobre', priority: '0.5' },
  { loc: '/contato', priority: '0.4' },
  { loc: '/privacidade', priority: '0.3' },
  { loc: '/termos', priority: '0.3' },
  ...tools.map(id => ({ loc: `/ferramentas/${id}`, priority: '0.9' })),
  ...guides.map(id => ({ loc: `/guias/${id}`, priority: '0.7' })),
  ...blogSlugs.map(slug => ({ loc: `/blog/${slug}`, priority: '0.7' })),
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
