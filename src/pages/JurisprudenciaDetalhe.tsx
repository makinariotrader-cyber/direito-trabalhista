import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Gavel, Calendar, Scale } from 'lucide-react';
import { jurisprudencias } from '../jurisprudenciaData';
import AdSensePlaceholder from '../components/AdSensePlaceholder';

export default function JurisprudenciaDetalhe() {
  const { id } = useParams<{ id: string }>();
  const jurisprudencia = jurisprudencias.find(j => j.id === id);

  if (!jurisprudencia) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <Gavel className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Precedente não encontrado</h1>
        <p className="text-gray-500 mb-6">O precedente que você procura não foi encontrado.</p>
        <Link to="/jurisprudencia" className="btn-primary inline-flex items-center gap-2"><ArrowLeft className="w-4 h-4" /> Ver Todos</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link to="/" className="hover:text-primary-500">Início</Link>
        <span>/</span>
        <Link to="/jurisprudencia" className="hover:text-primary-500">Jurisprudência</Link>
        <span>/</span>
        <span className="text-gray-600 truncate">{jurisprudencia.titulo}</span>
      </nav>

      <Link to="/jurisprudencia" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-amber-600 transition-colors mb-6">
        <ArrowLeft className="w-4 h-4" /> Voltar para Jurisprudência
      </Link>

      <article>
        <header className="mb-8">
          <div className="flex items-center gap-2 text-xs mb-3">
            <span className="bg-amber-50 text-amber-700 px-2.5 py-0.5 rounded-full font-medium">{jurisprudencia.tema}</span>
            <span className="bg-gray-100 text-gray-500 px-2.5 py-0.5 rounded-full">{jurisprudencia.categoria}</span>
            <span className="bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full flex items-center gap-1">
              <Calendar className="w-3 h-3" /> {jurisprudencia.dataJulgamento}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">{jurisprudencia.titulo}</h1>
          <p className="text-gray-600 mb-2"><strong>Órgão Julgador:</strong> {jurisprudencia.orgaoJulgador}</p>
          {jurisprudencia.relator && <p className="text-gray-600 mb-4"><strong>Relator:</strong> {jurisprudencia.relator}</p>}
        </header>

        <AdSensePlaceholder format="horizontal" className="mb-8" />

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Gavel className="w-5 h-5 text-amber-600" />
            Tese Firmada
          </h2>
          <blockquote className="text-gray-700 leading-relaxed text-[15px] italic border-l-4 border-amber-400 pl-4">
            {jurisprudencia.tese}
          </blockquote>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Detalhamento</h2>
          <p className="text-gray-700 leading-relaxed text-[15px]">{jurisprudencia.descricao}</p>
        </div>

        <AdSensePlaceholder format="horizontal" className="mb-8" />

        <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
          <h3 className="font-semibold text-gray-900 text-sm mb-2">Tags</h3>
          <div className="flex flex-wrap gap-1.5">
            {jurisprudencia.tags.map(tag => <span key={tag} className="text-xs bg-gray-200 text-gray-500 px-2 py-0.5 rounded-full">{tag}</span>)}
          </div>
        </div>

        <section className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-100 text-center">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Precisa calcular seus direitos?</h2>
          <p className="text-sm text-gray-600 mb-4">Use nossas calculadoras gratuitas.</p>
          <Link to="/ferramentas" className="btn-primary inline-flex items-center gap-2 text-sm">Ver Calculadoras</Link>
        </section>
      </article>
    </div>
  );
}
