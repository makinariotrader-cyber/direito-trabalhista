import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Gavel, ArrowRight, Calendar, Scale } from 'lucide-react';
import { jurisprudencias, jurisprudenciaCategorias } from '../jurisprudenciaData';
import AdSensePlaceholder from '../components/AdSensePlaceholder';

export default function Jurisprudencia() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const filtered = jurisprudencias.filter(j => {
    const matchSearch = !search ||
      j.titulo.toLowerCase().includes(search.toLowerCase()) ||
      j.tese.toLowerCase().includes(search.toLowerCase()) ||
      j.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    const matchCategory = !category || j.categoria === category;
    return matchSearch && matchCategory;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-primary-600 mb-2">
          <Gavel className="w-5 h-5" />
          <span className="text-sm font-medium">TST - Precedentes Vinculantes</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Jurisprudência do TST</h1>
        <p className="text-gray-600 max-w-3xl">
          Precedentes vinculantes, recursos repetitivos e teses jurídicas fixadas pelo Tribunal Superior do Trabalho. 
          Decisões com força de precedente obrigatório para toda a Justiça do Trabalho. 
          Fonte oficial: <a href="https://www.tst.jus.br/jurisprudencia" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">TST - Jurisprudência</a>.
        </p>
      </div>

      <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-100 mb-8">
        <div className="flex gap-2 flex-wrap">
          <span className="text-xs bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full font-medium">Recursos Repetitivos</span>
          <span className="text-xs bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full font-medium">Teses Vinculantes</span>
          <span className="text-xs bg-yellow-100 text-yellow-700 px-2.5 py-1 rounded-full font-medium">Julgamentos 2024-2025</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            className="input-field pl-10"
            placeholder="Buscar jurisprudência..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <select className="input-field sm:w-48" value={category} onChange={e => setCategory(e.target.value)}>
          <option value="">Todas as categorias</option>
          {jurisprudenciaCategorias.map(cat => <option key={cat.id} value={cat.name}>{cat.name}</option>)}
        </select>
      </div>

      <AdSensePlaceholder format="horizontal" className="mb-8" />

      {filtered.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-xl">
          <Gavel className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">Nenhum precedente encontrado.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map(j => (
            <div key={j.id} className="card group hover:border-amber-200 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-100 transition-colors">
                  <Gavel className="w-6 h-6 text-amber-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
                    <span className="bg-amber-50 text-amber-600 px-2 py-0.5 rounded-full">{j.categoria}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{j.dataJulgamento}</span>
                  </div>
                  <Link to={`/jurisprudencia/${j.id}`} className="text-lg font-semibold text-gray-900 group-hover:text-amber-700 transition-colors">
                    {j.titulo}
                  </Link>
                  <p className="text-sm text-gray-500 mt-1 font-medium italic">"{j.tese.substring(0, 120)}..."</p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex flex-wrap gap-1.5">
                      {j.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-xs bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <span className="text-xs font-medium text-amber-600 flex items-center gap-1 whitespace-nowrap">
                      Ler tese completa <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <AdSensePlaceholder format="horizontal" className="mt-8" />

      <div className="mt-8 p-6 bg-amber-50 rounded-xl border border-amber-100">
        <div className="flex items-start gap-3">
          <Gavel className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">O que são Precedentes Vinculantes?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Os precedentes vinculantes da Justiça do Trabalho são teses jurídicas fixadas pelo TST em julgamento 
              de recursos repetitivos (IRR). Têm força obrigatória para todos os Tribunais Regionais do Trabalho 
              e Varas do Trabalho, uniformizando a aplicação do direito em todo o Brasil. O NUGEP (Núcleo de 
              Gerenciamento de Precedentes) do TST é responsável por gerenciar e divulgar esses precedentes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
