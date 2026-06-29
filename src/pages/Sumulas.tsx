import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookText, ArrowRight, Scale, FileText } from 'lucide-react';
import { sumulas, sumulaCategories } from '../sumulasData';
import AdSensePlaceholder from '../components/AdSensePlaceholder';

const categoryIcons: Record<string, React.ReactNode> = {
  'Direito Individual do Trabalho': <Scale className="w-5 h-5" />,
  'Direito Processual do Trabalho': <FileText className="w-5 h-5" />,
  'Adicionais e Remuneração': <BookText className="w-5 h-5" />,
  'Rescisão Contratual': <FileText className="w-5 h-5" />,
  'Terceirização e Responsabilidade': <Scale className="w-5 h-5" />,
};

export default function Sumulas() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const filtered = sumulas.filter(s => {
    const matchSearch = !search ||
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.description.toLowerCase().includes(search.toLowerCase()) ||
      s.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    const matchCategory = !category || s.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-primary-600 mb-2">
          <BookText className="w-5 h-5" />
          <span className="text-sm font-medium">TST - Tribunal Superior do Trabalho</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Súmulas do TST</h1>
        <p className="text-gray-600 max-w-3xl">
          As Súmulas representam o entendimento consolidado do Tribunal Superior do Trabalho sobre matérias 
          de direito individual e processual do trabalho. São de observância obrigatória pelos Tribunais Regionais 
          e Varas do Trabalho em todo o Brasil. Fonte oficial: <a href="https://www.tst.jus.br/livro-de-sumulas-ojs-e-pns" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">TST - Livro de Súmulas</a>.
        </p>
      </div>

      <div className="p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl border border-indigo-100 mb-8">
        <div className="flex gap-2 flex-wrap">
          <span className="text-xs bg-indigo-100 text-indigo-700 px-2.5 py-1 rounded-full font-medium">Força Vinculante</span>
          <span className="text-xs bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full font-medium">20 Súmulas Principais</span>
          <span className="text-xs bg-purple-100 text-purple-700 px-2.5 py-1 rounded-full font-medium">Atualizado 2025</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            className="input-field pl-10"
            placeholder="Buscar súmula pelo número ou tema..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <select className="input-field sm:w-48" value={category} onChange={e => setCategory(e.target.value)}>
          <option value="">Todas as categorias</option>
          {sumulaCategories.map(cat => <option key={cat.id} value={cat.name}>{cat.name}</option>)}
        </select>
      </div>

      <AdSensePlaceholder format="horizontal" className="mb-8" />

      {filtered.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-xl">
          <BookText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">Nenhuma súmula encontrada.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map(sumula => (
            <div key={sumula.id} className="card group hover:border-indigo-200 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-100 transition-colors">
                  <span className="text-lg font-bold text-indigo-600">S{sumula.numero}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
                    <span className="bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full">{sumula.category}</span>
                  </div>
                  <Link to={`/sumulas/${sumula.id}`} className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    Súmula {sumula.numero} — {sumula.title}
                  </Link>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">{sumula.description}</p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex flex-wrap gap-1.5">
                      {sumula.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-xs bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <span className="text-xs font-medium text-indigo-600 flex items-center gap-1 whitespace-nowrap">
                      Ler súmula completa <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <AdSensePlaceholder format="horizontal" className="mt-8" />

      <div className="mt-8 p-6 bg-indigo-50 rounded-xl border border-indigo-100">
        <div className="flex items-start gap-3">
          <BookText className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">O que são Súmulas do TST?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              As Súmulas são enunciados que consolidam a jurisprudência predominante do Tribunal Superior do Trabalho 
              sobre determinada matéria. Representam o entendimento pacificado da Corte e orientam as decisões de 
              todos os Tribunais Regionais do Trabalho (TRTs) e Varas do Trabalho. Diferem das Súmulas Vinculantes 
              do STF, mas têm grande força persuasiva e são normalmente seguidas por toda a Justiça do Trabalho.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
