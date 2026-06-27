import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, Clock, Share2, ExternalLink, HelpCircle, BookOpen } from 'lucide-react';
import { blogPosts } from '../blogData';
import AdSensePlaceholder from '../components/AdSensePlaceholder';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
        <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Artigo não encontrado</h1>
        <p className="text-gray-500 mb-6">O artigo que você procura não está disponível.</p>
        <Link to="/blog" className="btn-primary inline-flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Voltar para o Blog
        </Link>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && (p.category === post.category || p.tags.some(t => post.tags.includes(t))))
    .slice(0, 3);

  const schemaArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'Calculadora Trabalhista',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Calculadora Trabalhista',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.calculadoratrabalhista.com.br/favicon.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.calculadoratrabalhista.com.br/blog/${post.slug}`,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link to="/" className="hover:text-primary-500 transition-colors">Início</Link>
        <span>/</span>
        <Link to="/blog" className="hover:text-primary-500 transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-gray-600 truncate">{post.title}</span>
      </nav>

      <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary-600 transition-colors mb-6">
        <ArrowLeft className="w-4 h-4" /> Voltar para o Blog
      </Link>

      <article>
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(post.date).toLocaleDateString('pt-BR')}
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span className="flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" />
              {post.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.author}
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>

          <p className="text-gray-600 leading-relaxed text-lg">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map(tag => (
              <span key={tag} className="text-xs bg-primary-50 text-primary-600 px-2.5 py-1 rounded-full font-medium">
                #{tag}
              </span>
            ))}
          </div>
        </header>

        <AdSensePlaceholder format="horizontal" className="mb-8" />

        {/* Content */}
        <div className="prose prose-gray max-w-none">
          {post.content.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="text-gray-700 leading-relaxed mb-4 text-[15px]">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Interlinks */}
        {post.interlinks.length > 0 && (
          <div className="mt-8 p-5 bg-green-50 rounded-xl border border-green-100">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-green-600" />
              Ferramentas Relacionadas
            </h3>
            <ul className="space-y-2">
              {post.interlinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.to}
                    className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3 h-3 rotate-180" />
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* FAQ */}
        {post.faq.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-primary-500" />
              Perguntas Frequentes
            </h2>
            <div className="space-y-3">
              {post.faq.map((item, idx) => (
                <details key={idx} className="bg-white border border-gray-200 rounded-xl overflow-hidden group">
                  <summary className="font-medium text-gray-900 px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors flex items-center justify-between text-sm">
                    {item.question}
                    <span className="text-gray-400 group-open:rotate-180 transition-transform text-xs">▼</span>
                  </summary>
                  <div className="px-4 pb-3 pt-1 text-sm text-gray-600 border-t border-gray-100">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        )}

        <AdSensePlaceholder format="horizontal" className="my-8" />

        {/* Share */}
        <div className="flex items-center gap-3 py-6 border-t border-gray-100">
          <Share2 className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-500">Compartilhe este artigo:</span>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: post.title, url: window.location.href });
              } else {
                navigator.clipboard.writeText(window.location.href);
              }
            }}
            className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
          >
            Compartilhar
          </button>
        </div>

        {/* Tags */}
        <div className="pb-6 border-b border-gray-100">
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Artigos Relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedPosts.map(rp => (
              <Link
                key={rp.id}
                to={`/blog/${rp.slug}`}
                className="card group hover:border-primary-200 transition-all"
              >
                <div className="text-xs text-gray-400 mb-1">
                  {new Date(rp.date).toLocaleDateString('pt-BR')} — {rp.category}
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors text-sm">
                  {rp.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                  {rp.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="mt-10 p-6 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl border border-primary-100 text-center">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Precisa calcular seus direitos trabalhistas?</h2>
        <p className="text-sm text-gray-600 mb-4">
          Use nossas calculadoras gratuitas para simular rescisão, horas extras, FGTS e muito mais.
        </p>
        <Link to="/ferramentas" className="btn-primary inline-flex items-center gap-2 text-sm">
          Ver Todas as Calculadoras <ExternalLink className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
