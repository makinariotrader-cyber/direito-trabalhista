import { useState } from 'react';
import { Search } from 'lucide-react';
import { tools, categories } from '../toolsData';
import ToolCard from '../components/ToolCard';
import AdSensePlaceholder from '../components/AdSensePlaceholder';

export default function Ferramentas() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const filtered = tools.filter(t => {
    const matchSearch = !search || t.title.toLowerCase().includes(search.toLowerCase()) || t.description.toLowerCase().includes(search.toLowerCase());
    const matchCategory = !category || t.category === category;
    return matchSearch && matchCategory;
  });

  const grouped = categories
    .filter(c => !category || c.name === category)
    .map(cat => ({ ...cat, tools: filtered.filter(t => t.category === cat.name) }))
    .filter(g => g.tools.length > 0);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Todas as Calculadoras</h1>
        <p className="text-gray-600">{tools.length} ferramentas gratuitas para calcular seus direitos trabalhistas.</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            className="input-field pl-10"
            placeholder="Buscar calculadora..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <select className="input-field sm:w-48" value={category} onChange={e => setCategory(e.target.value)}>
          <option value="">Todas as categorias</option>
          {categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
        </select>
      </div>

      <AdSensePlaceholder format="horizontal" className="mb-8" />

      {grouped.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">Nenhuma calculadora encontrada.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {grouped.map(group => (
            <div key={group.id}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">{group.name} ({group.tools.length})</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.tools.map(tool => <ToolCard key={tool.id} tool={tool} />)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
