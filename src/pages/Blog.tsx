import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Tag, ArrowRight, Clock, BookOpen } from 'lucide-react';
import { blogPosts, blogCategories } from '../blogData';
import AdSensePlaceholder from '../components/AdSensePlaceholder';

export default function Blog() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const filtered = blogPosts.filter(p => {
    const matchSearch = !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    const matchCategory = !category || p.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-primary-600 mb-2">
          <BookOpen className="w-5 h-5" />
          <span className="text-sm font-medium">Blog Trabalhista</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Artigos e Notícias Trabalhistas</h1>
        <p className="text-gray-600">
          Informações atualizadas sobre direitos trabalhistas, legislação e cálculos com dados oficiais do governo federal.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            className="input-field pl-10"
            placeholder="Buscar artigos..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <select className="input-field sm:w-48" value={category} onChange={e => setCategory(e.target.value)}>
          <option value="">Todas as categorias</option>
          {blogCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>
      </div>

      <AdSensePlaceholder format="horizontal" className="mb-8" />

      {filtered.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-xl">
          <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">Nenhum artigo encontrado.</p>
          <p className="text-sm text-gray-400 mt-1">Tente buscar por outro termo ou categoria.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {filtered.map(post => (
            <article
              key={post.id}
              className="card group hover:border-primary-200 transition-all"
            >
              <Link to={`/blog/${post.slug}`} className="block p-1">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('pt-BR')}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      <span className="flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.author}
                      </span>
                      <span className="text-xs font-medium text-primary-600 flex items-center gap-1 ml-auto group-hover:text-primary-500 transition-colors">
                        Ler artigo completo <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {post.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}

      <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
        <h3 className="font-semibold text-gray-900 mb-2">📝 Novos artigos toda semana</h3>
        <p className="text-sm text-gray-600">
          Nosso blog é atualizado regularmente com conteúdo baseado em fontes oficiais como a CLT, 
          Constituição Federal, jurisprudência do TST e portarias do Ministério do Trabalho e Emprego.
        </p>
      </div>
    </div>
  );
}
