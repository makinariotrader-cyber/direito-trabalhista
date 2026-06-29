import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookText, ExternalLink, Scale } from 'lucide-react';
import { sumulas } from '../sumulasData';
import AdSensePlaceholder from '../components/AdSensePlaceholder';

export default function SumulaDetalhe() {
  const { id } = useParams<{ id: string }>();
  const sumula = sumulas.find(s => s.id === id);

  if (!sumula) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <BookText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Súmula não encontrada</h1>
        <p className="text-gray-500 mb-6">A súmula que você procura não foi encontrada.</p>
        <Link to="/sumulas" className="btn-primary inline-flex items-center gap-2"><ArrowLeft className="w-4 h-4" /> Ver Todas as Súmulas</Link>
      </div>
    );
  }

  const paragraphs = sumula.content.split('\n\n');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link to="/" className="hover:text-primary-500">Início</Link>
        <span>/</span>
        <Link to="/sumulas" className="hover:text-primary-500">Súmulas TST</Link>
        <span>/</span>
        <span className="text-gray-600 truncate">Súmula {sumula.numero}</span>
      </nav>

      <Link to="/sumulas" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors mb-6">
        <ArrowLeft className="w-4 h-4" /> Voltar para Súmulas
      </Link>

      <article>
        <header className="mb-8">
          <div className="flex items-center gap-2 text-xs mb-3">
            <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded-full font-medium">Súmula {sumula.numero}</span>
            <span className="bg-gray-100 text-gray-500 px-2.5 py-0.5 rounded-full">{sumula.category}</span>
            <span className="bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full">{sumula.dataAprovacao}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">Súmula {sumula.numero} do TST — {sumula.title}</h1>
          <p className="text-gray-600 text-lg">{sumula.description}</p>
        </header>

        <AdSensePlaceholder format="horizontal" className="mb-8" />

        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <BookText className="w-5 h-5 text-indigo-500" />
            Texto da Súmula
          </h2>
          <div className="space-y-4">
            {paragraphs.map((p, idx) => (
              <p key={idx} className="text-gray-700 leading-relaxed text-[15px]">{p}</p>
            ))}
          </div>
        </div>

        <AdSensePlaceholder format="horizontal" className="mb-8" />

        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex-1 min-w-[200px] p-4 bg-gray-50 rounded-xl border border-gray-100">
            <h3 className="font-semibold text-gray-900 text-sm mb-2">Tags</h3>
            <div className="flex flex-wrap gap-1.5">
              {sumula.tags.map(tag => <span key={tag} className="text-xs bg-gray-200 text-gray-500 px-2 py-0.5 rounded-full">{tag}</span>)}
            </div>
          </div>
          {sumula.relacionados.length > 0 && (
            <div className="flex-1 min-w-[200px] p-4 bg-gray-50 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-900 text-sm mb-2">Normas Relacionadas</h3>
              <div className="flex flex-wrap gap-1.5">
                {sumula.relacionados.map(r => <span key={r} className="text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full">{r}</span>)}
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <section className="p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl border border-indigo-100 text-center">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Precisa de ajuda com seus direitos?</h2>
          <p className="text-sm text-gray-600 mb-4">Use nossas calculadoras gratuitas para simular valores.</p>
          <Link to="/ferramentas" className="btn-primary inline-flex items-center gap-2 text-sm">
            Ver Calculadoras <ExternalLink className="w-4 h-4" />
          </Link>
        </section>
      </article>
    </div>
  );
}
