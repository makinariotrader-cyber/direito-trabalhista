import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Scale, HelpCircle, ExternalLink } from 'lucide-react';
import { cltDireitos } from '../cltData';
import AdSensePlaceholder from '../components/AdSensePlaceholder';

export default function CLTDireito() {
  const { slug } = useParams<{ slug: string }>();
  const direito = cltDireitos.find(d => d.slug === slug);

  if (!direito) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
        <Scale className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Direito não encontrado</h1>
        <p className="text-gray-500 mb-6">O direito trabalhista que você procura não foi encontrado.</p>
        <Link to="/clt" className="btn-primary inline-flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Ver Todos os Direitos
        </Link>
      </div>
    );
  }

  const schemaArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: direito.title,
    description: direito.metaDescription,
    author: { '@type': 'Organization', name: 'Calculadora Trabalhista' },
    publisher: { '@type': 'Organization', name: 'Calculadora Trabalhista' },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link to="/" className="hover:text-primary-500">Início</Link>
        <span>/</span>
        <Link to="/clt" className="hover:text-primary-500">CLT</Link>
        <span>/</span>
        <span className="text-gray-600 truncate">{direito.title}</span>
      </nav>

      <Link to="/clt" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary-600 transition-colors mb-6">
        <ArrowLeft className="w-4 h-4" /> Voltar para Direitos CLT
      </Link>

      <article>
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
            <span className="bg-primary-50 text-primary-700 px-2.5 py-0.5 rounded-full font-medium">{direito.cfArticle}</span>
            <span className="bg-gray-100 text-gray-500 px-2.5 py-0.5 rounded-full">{direito.cltArticles}</span>
            <span className="bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full">{direito.category}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">{direito.title}</h1>
          <p className="text-gray-600 leading-relaxed text-lg">{direito.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {direito.tags.map(tag => (
              <span key={tag} className="text-xs bg-primary-50 text-primary-600 px-2.5 py-1 rounded-full font-medium">#{tag}</span>
            ))}
          </div>
        </header>

        <AdSensePlaceholder format="horizontal" className="mb-8" />

        {/* Conteúdo */}
        <div className="prose prose-gray max-w-none">
          {direito.content.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="text-gray-700 leading-relaxed mb-4 text-[15px]">{paragraph}</p>
          ))}
        </div>

        {/* Práticas */}
        <div className="mt-8 p-5 bg-green-50 rounded-xl border border-green-100">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <ExternalLink className="w-4 h-4 text-green-600" />
            Orientações Práticas
          </h3>
          <ul className="space-y-2">
            {direito.praticas.map((p, idx) => (
              <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                <span className="text-green-500 mt-0.5">•</span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ */}
        {direito.faq.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-primary-500" />
              Perguntas Frequentes
            </h2>
            <div className="space-y-3">
              {direito.faq.map((item, idx) => (
                <details key={idx} className="bg-white border border-gray-200 rounded-xl overflow-hidden group">
                  <summary className="font-medium text-gray-900 px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors flex items-center justify-between text-sm">
                    {item.question}
                    <span className="text-gray-400 group-open:rotate-180 transition-transform text-xs">▼</span>
                  </summary>
                  <div className="px-4 pb-3 pt-1 text-sm text-gray-600 border-t border-gray-100">{item.answer}</div>
                </details>
              ))}
            </div>
          </div>
        )}

        <AdSensePlaceholder format="horizontal" className="my-8" />
      </article>

      {/* CTA */}
      <section className="mt-10 p-6 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl border border-primary-100 text-center">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Precisa calcular seus direitos trabalhistas?</h2>
        <p className="text-sm text-gray-600 mb-4">Use nossas calculadoras gratuitas para simular valores exatos.</p>
        <Link to="/ferramentas" className="btn-primary inline-flex items-center gap-2 text-sm">
          Ver Calculadoras <ExternalLink className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
