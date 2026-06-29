import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, ExternalLink, Calendar } from 'lucide-react';
import { ojs } from '../ojsData';
import AdSensePlaceholder from '../components/AdSensePlaceholder';

export default function OJDetalhe() {
  const { id } = useParams<{ id: string }>();
  const oj = ojs.find(o => o.id === id);

  if (!oj) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-3">OJ não encontrada</h1>
        <p className="text-gray-500 mb-6">A orientação jurisprudencial que você procura não foi encontrada.</p>
        <Link to="/ojs" className="btn-primary inline-flex items-center gap-2"><ArrowLeft className="w-4 h-4" /> Ver Todas as OJs</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link to="/" className="hover:text-primary-500">Início</Link>
        <span>/</span>
        <Link to="/ojs" className="hover:text-primary-500">OJs TST</Link>
        <span>/</span>
        <span className="text-gray-600 truncate">OJ {oj.numero}</span>
      </nav>

      <Link to="/ojs" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-purple-600 transition-colors mb-6">
        <ArrowLeft className="w-4 h-4" /> Voltar para OJs
      </Link>

      <article>
        <header className="mb-8">
          <div className="flex items-center gap-2 text-xs mb-3">
            <span className="bg-purple-50 text-purple-700 px-2.5 py-0.5 rounded-full font-medium">OJ {oj.numero}</span>
            <span className="bg-gray-100 text-gray-500 px-2.5 py-0.5 rounded-full">{oj.categoria}</span>
            <span className="bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full">{oj.secao}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">OJ {oj.numero} — {oj.titulo}</h1>
        </header>

        <AdSensePlaceholder format="horizontal" className="mb-8" />

        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-500" />
            Texto da Orientação Jurisprudencial
          </h2>
          <p className="text-gray-700 leading-relaxed text-[15px]">{oj.conteudo}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
            <h3 className="font-semibold text-gray-900 text-sm mb-2">Data de Aprovação</h3>
            <p className="text-sm text-gray-600">{oj.dataAprovacao}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
            <h3 className="font-semibold text-gray-900 text-sm mb-2">Seção</h3>
            <p className="text-sm text-gray-600">{oj.secao}</p>
          </div>
        </div>

        <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 mb-8">
          <h3 className="font-semibold text-gray-900 text-sm mb-2">Tags</h3>
          <div className="flex flex-wrap gap-1.5">
            {oj.tags.map(tag => <span key={tag} className="text-xs bg-gray-200 text-gray-500 px-2 py-0.5 rounded-full">{tag}</span>)}
          </div>
        </div>

        <AdSensePlaceholder format="horizontal" className="mb-8" />

        <section className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100 text-center">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Precisa de ajuda com seus direitos?</h2>
          <p className="text-sm text-gray-600 mb-4">Use nossas calculadoras gratuitas para simular valores.</p>
          <Link to="/ferramentas" className="btn-primary inline-flex items-center gap-2 text-sm">Ver Calculadoras</Link>
        </section>
      </article>
    </div>
  );
}
