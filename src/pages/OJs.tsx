import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, ArrowRight, Scale, FileText } from 'lucide-react';
import { ojs, ojCategorias } from '../ojsData';
import AdSensePlaceholder from '../components/AdSensePlaceholder';

export default function OJs() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const filtered = ojs.filter(oj => {
    const matchSearch = !search ||
      oj.titulo.toLowerCase().includes(search.toLowerCase()) ||
      oj.conteudo.toLowerCase().includes(search.toLowerCase()) ||
      oj.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    const matchCategory = !category || oj.categoria === category;
    return matchSearch && matchCategory;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-primary-600 mb-2">
          <BookOpen className="w-5 h-5" />
          <span className="text-sm font-medium">TST - Orientações Jurisprudenciais</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Orientações Jurisprudenciais (OJs)</h1>
        <p className="text-gray-600 max-w-3xl">
          As Orientações Jurisprudenciais (OJs) são enunciados das Subseções do Tribunal Superior do Trabalho que 
          consolidam o entendimento predominante de cada Seção Especializada sobre temas específicos. 
          Fonte oficial: <a href="https://www.tst.jus.br/livro-de-sumulas-ojs-e-pns" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">TST - Livro de Súmulas e OJs</a>.
        </p>
      </div>

      <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100 mb-8">
        <div className="flex gap-2 flex-wrap">
          <span className="text-xs bg-purple-100 text-purple-700 px-2.5 py-1 rounded-full font-medium">SDI-1 (Dissídios Individuais)</span>
          <span className="text-xs bg-pink-100 text-pink-700 px-2.5 py-1 rounded-full font-medium">SDI-2 (Dissídios Coletivos)</span>
          <span className="text-xs bg-violet-100 text-violet-700 px-2.5 py-1 rounded-full font-medium">Atualizado 2025</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            className="input-field pl-10"
            placeholder="Buscar OJ pelo número ou tema..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <select className="input-field sm:w-48" value={category} onChange={e => setCategory(e.target.value)}>
          <option value="">Todas as categorias</option>
          {ojCategorias.map(cat => <option key={cat.id} value={cat.name}>{cat.name}</option>)}
        </select>
      </div>

      <AdSensePlaceholder format="horizontal" className="mb-8" />

      {filtered.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-xl">
          <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">Nenhuma OJ encontrada.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map(oj => (
            <div key={oj.id} className="card group hover:border-purple-200 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-100 transition-colors">
                  <span className="text-lg font-bold text-purple-600">OJ {oj.numero}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
                    <span className="bg-purple-50 text-purple-600 px-2 py-0.5 rounded-full">{oj.categoria}</span>
                    <span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{oj.secao}</span>
                  </div>
                  <Link to={`/ojs/${oj.id}`} className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                    OJ {oj.numero} — {oj.titulo}
                  </Link>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">{oj.conteudo.substring(0, 200)}...</p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex flex-wrap gap-1.5">
                      {oj.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-xs bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <span className="text-xs font-medium text-purple-600 flex items-center gap-1 whitespace-nowrap">
                      Ler OJ completa <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <AdSensePlaceholder format="horizontal" className="mt-8" />

      <div className="mt-8 p-6 bg-purple-50 rounded-xl border border-purple-100">
        <div className="flex items-start gap-3">
          <BookOpen className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">O que são Orientações Jurisprudenciais (OJs)?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              As OJs são enunciados editados pelas Subseções do TST (SDI-1 e SDI-2) que consolidam a jurisprudência 
              predominante sobre temas específicos. Diferem das Súmulas por representarem o entendimento de uma 
              Seção especializada, e não do Tribunal Pleno. Têm grande importância na uniformização da jurisprudência 
              e são amplamente seguidas pelos Tribunais Regionais do Trabalho.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
