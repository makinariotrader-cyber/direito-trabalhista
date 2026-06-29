import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, FileText, BookOpen, Scale, ArrowRight, Clock, Zap, Heart, Shield, UserCheck } from 'lucide-react';
import { cltDireitos, cltCategories } from '../cltData';
import AdSensePlaceholder from '../components/AdSensePlaceholder';

const categoryIcons: Record<string, React.ReactNode> = {
  'Direitos Fundamentais': <Scale className="w-5 h-5" />,
  'Jornada de Trabalho': <Clock className="w-5 h-5" />,
  'Remuneração': <FileText className="w-5 h-5" />,
  'Contrato de Trabalho': <BookOpen className="w-5 h-5" />,
  'Rescisão Contratual': <FileText className="w-5 h-5" />,
  'Adicionais Salariais': <Zap className="w-5 h-5" />,
};

export default function CLT() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const filtered = cltDireitos.filter(d => {
    const matchSearch = !search ||
      d.title.toLowerCase().includes(search.toLowerCase()) ||
      d.description.toLowerCase().includes(search.toLowerCase()) ||
      d.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    const matchCategory = !category || d.category === category;
    return matchSearch && matchCategory;
  });

  const grouped = cltCategories
    .filter(c => !category || c.name === category)
    .map(cat => ({ ...cat, itens: filtered.filter(d => d.category === cat.name) }))
    .filter(g => g.itens.length > 0);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-primary-600 mb-2">
          <Scale className="w-5 h-5" />
          <span className="text-sm font-medium">Consolidação das Leis do Trabalho</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Direitos Trabalhistas — CLT</h1>
        <p className="text-gray-600 max-w-3xl">
          Seção completa com os principais direitos trabalhistas previstos na Consolidação das Leis do Trabalho (CLT) 
          e na Constituição Federal. Cada direito é explicado com base legal (artigos da CLT e CF/88), 
          FAQ e orientações práticas. Fontes oficiais: Planalto, TST e Ministério do Trabalho.
        </p>
      </div>

      {/* Info Box */}
      <div className="p-4 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl border border-primary-100 mb-8">
        <div className="flex items-start gap-3">
          <div className="flex gap-2 flex-wrap">
            <span className="text-xs bg-primary-100 text-primary-700 px-2.5 py-1 rounded-full font-medium">Base Legal: CLT + CF/88</span>
            <span className="text-xs bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full font-medium">Súmulas do TST</span>
            <span className="text-xs bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full font-medium">Jurisprudência Atualizada</span>
            <span className="text-xs bg-green-100 text-green-700 px-2.5 py-1 rounded-full font-medium">2025 Atualizado</span>
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            className="input-field pl-10"
            placeholder="Buscar direito trabalhista..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <select className="input-field sm:w-48" value={category} onChange={e => setCategory(e.target.value)}>
          <option value="">Todas as categorias</option>
          {cltCategories.map(cat => <option key={cat.id} value={cat.name}>{cat.name}</option>)}
        </select>
      </div>

      <AdSensePlaceholder format="horizontal" className="mb-8" />

      {grouped.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-xl">
          <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">Nenhum direito trabalhista encontrado.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {grouped.map(group => (
            <div key={group.id}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600">
                  {categoryIcons[group.name] || <FileText className="w-4 h-4" />}
                </div>
                <h2 className="text-xl font-bold text-gray-900">{group.name}</h2>
                <span className="text-sm text-gray-400">({group.itens.length})</span>
              </div>
              <div className="space-y-3">
                {group.itens.map(direito => (
                  <div key={direito.id} className="card group hover:border-primary-200 transition-all">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
                          <span className="bg-primary-50 text-primary-600 px-2 py-0.5 rounded-full font-medium">
                            {direito.cfArticle}
                          </span>
                          <span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                            {direito.cltArticles}
                          </span>
                        </div>
                        <Link 
                          to={`/clt/${direito.slug}`}
                          className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors"
                        >
                          {direito.title}
                        </Link>
                        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{direito.description}</p>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {direito.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-xs bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <Link 
                        to={`/clt/${direito.slug}`}
                        className="flex items-center gap-1 text-sm font-medium text-primary-600 whitespace-nowrap mt-1"
                      >
                        Ler <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <AdSensePlaceholder format="horizontal" className="mt-8" />

      {/* Info Box */}
      <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
        <div className="flex items-start gap-3">
          <Scale className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Fontes Oficiais</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Todo o conteúdo desta seção é baseado em fontes oficiais: Consolidação das Leis do Trabalho (CLT - Decreto-Lei 5.452/1943), 
              Constituição Federal de 1988 (artigo 7º), jurisprudência consolidada do Tribunal Superior do Trabalho (TST) 
              e Normas Regulamentadoras (NR) do Ministério do Trabalho e Emprego. 
              Consulte a versão mais atualizada no <a href="https://www.planalto.gov.br" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">Portal do Planalto</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
