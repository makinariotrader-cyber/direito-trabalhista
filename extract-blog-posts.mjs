#!/usr/bin/env node
/**
 * Extractor de Posts do Blog
 *
 * Usa esbuild para transpilar blogData.ts e extrair
 * todos os posts como arquivos JSON em src/generated-posts/.
 *
 * Uso: node extract-blog-posts.mjs
 */

import { writeFileSync, mkdirSync, readdirSync, existsSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __dirname = dirname(fileURLToPath(import.meta.url));
const __require = createRequire(import.meta.url);

const POSTS_DIR = resolve(__dirname, 'src', 'generated-posts');
const BLOG_DATA_PATH = resolve(__dirname, 'src', 'blogData.ts');
const TEMP_JS_PATH = resolve(__dirname, '_temp_blog_posts.cjs');

function cleanup() {
  try {
    if (existsSync(TEMP_JS_PATH)) {
      const { unlinkSync } = __require('fs');
      unlinkSync(TEMP_JS_PATH);
    }
  } catch (e) {
    // ignore
  }
}

async function main() {
  console.log('');
  console.log('=== EXTRACTOR DE POSTS DO BLOG ===');
  console.log('');

  mkdirSync(POSTS_DIR, { recursive: true });
  console.log('Diretorio: ' + POSTS_DIR);

  // Transpilar TypeScript para JavaScript usando esbuild
  console.log('Transpilando blogData.ts com esbuild...');
  const esbuild = await import('esbuild');
  await esbuild.build({
    entryPoints: [BLOG_DATA_PATH],
    outfile: TEMP_JS_PATH,
    format: 'cjs',
    platform: 'node',
    target: 'node18',
    bundle: false,
    write: true,
  });

  // Carregar o JS transpilado
  console.log('Carregando dados...');
  const blogModule = __require(TEMP_JS_PATH);
  const blogPosts = blogModule.blogPosts;

  if (!Array.isArray(blogPosts) || blogPosts.length === 0) {
    console.log('Nenhum post encontrado no arquivo.');
    cleanup();
    return;
  }

  // Salvar cada post como JSON individual
  console.log('Salvando ' + blogPosts.length + ' posts...');
  var count = 0;
  for (var i = 0; i < blogPosts.length; i++) {
    var post = blogPosts[i];
    if (!post.slug) {
      console.log('  Pulando post sem slug: ' + (post.id || 'unknown'));
      continue;
    }
    var filePath = join(POSTS_DIR, post.slug + '.json');
    writeFileSync(filePath, JSON.stringify(post, null, 2), 'utf-8');
    count++;
    if (count <= 3 || count === blogPosts.length) {
      console.log('  OK: ' + post.slug + '.json');
    } else if (count === 4) {
      console.log('  ... (mais ' + (blogPosts.length - 4) + ' posts)');
    }
  }

  // Salvar index.json com todos os posts
  var indexPath = join(POSTS_DIR, 'index.json');
  writeFileSync(indexPath, JSON.stringify(blogPosts, null, 2), 'utf-8');
  console.log('  OK: index.json');

  // Limpar
  cleanup();

  // Resultado
  var files = readdirSync(POSTS_DIR).filter(function(f) { return f.endsWith('.json'); });
  console.log('');
  console.log('=== RESULTADO FINAL ===');
  console.log('Posts extraidos: ' + blogPosts.length);
  console.log('Arquivos JSON: ' + files.length);
  console.log('');
  console.log('OK - Extracao concluida com sucesso!');
}

main().catch(function(err) {
  console.error('ERRO: ' + err.message);
  cleanup();
  process.exit(1);
});
