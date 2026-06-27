import { Link } from 'react-router-dom';
import { Calculator, BookOpen, TrendingUp, ArrowRight, Search, FileText, Clock, Shield, Zap, Gift } from 'lucide-react';
import { tools, categories, guides } from '../toolsData';
import ToolCard from '../components/ToolCard';
import AdSensePlaceholder from '../components/AdSensePlaceholder';

const categoryIcons: Record<string, React.ReactNode> = {
  'Rescisão e Saída': <FileText className="w-5 h-5" />,
  'Jornada de Trabalho': <Clock className="w-5 h-5" />,
  'Adicionais Salariais': <Zap className="w-5 h-5" />,
  'Benefícios': <Gift className="w-5 h-5" />,
  'Finanças e Correção': <TrendingUp className="w-5 h-5" />,
};

export default function Home() {
  const toolsByCategory = categories.map(cat => ({
    ...cat,
    tools: tools.filter(t => t.category === cat.name),
  }));

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Calculator className="w-6 h-6 text-primary-200" />
              <span className="text-sm font-medium text-primary-200">Calculadoras Trabalhistas Online</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Seus Direitos Trabalhistas em Números
            </h1>
            <p className="text-lg md:text-xl text-primary-100 mb-8 leading-relaxed">
              Calcule online e gratuitamente rescisão, horas extras, FGTS, férias, 13º salário e muito mais.
              Ferramentas precisas e atualizadas com a legislação trabalhista brasileira.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/ferramentas" className="inline-flex items-center gap-2 bg-white text-primary-600 font-semibold px-6 py-3 rounded-xl hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]">
                Ver Todas as Calculadoras <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/guias" className="inline-flex items-center gap-2 bg-white/10 text-white font-medium px-6 py-3 rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20">
                <BookOpen className="w-4 h-4" /> Guias Trabalhistas
              </Link>
            </div>
          </div>
        </div>
        <div className="h-8 bg-gradient-to-t from-gray-50 to-transparent" />
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 -mt-8 relative z-10 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: `${tools.length}+`, label: 'Calculadoras', icon: Calculator },
            { value: `${guides.length}`, label: 'Guias Completos', icon: BookOpen },
            { value: '100%', label: 'Online e Grátis', icon: Search },
            { value: 'Atualizado', label: 'Legislação Vigente', icon: Shield },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-center hover:shadow-md transition-shadow">
              <stat.icon className="w-6 h-6 text-primary-500 mx-auto mb-2" />
              <div className="text-xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* AdSense */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
        <AdSensePlaceholder format="horizontal" />
      </div>

      {/* Tools by Category */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Todas as Calculadoras</h2>
        <div className="space-y-8">
          {toolsByCategory.map(cat => cat.tools.length > 0 && (
            <div key={cat.id}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600">
                  {categoryIcons[cat.name] || <Calculator className="w-4 h-4" />}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{cat.name}</h3>
                <span className="text-xs text-gray-400">({cat.tools.length})</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.tools.map(tool => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AdSense */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
        <AdSensePlaceholder format="horizontal" />
      </div>

      {/* Guides Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Guias Trabalhistas</h2>
            <p className="text-gray-500 mt-1">Artigos completos sobre seus direitos</p>
          </div>
          <Link to="/guias" className="text-sm font-medium text-primary-600 hover:text-primary-700 flex items-center gap-1">
            Ver Todos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {guides.slice(0, 3).map(guide => (
            <Link key={guide.id} to={`/guias/${guide.id}`} className="card group hover:border-primary-200 transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-100 transition-colors">
                  <BookOpen className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">{guide.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{guide.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-50 to-blue-50 border-t border-primary-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Precisa de ajuda com seus direitos trabalhistas?</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Nossas calculadoras são uma ferramenta de referência. Para questões específicas, consulte um advogado trabalhista.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/sobre" className="btn-primary">Sobre Nós</Link>
            <Link to="/contato" className="btn-secondary">Fale Conosco</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
