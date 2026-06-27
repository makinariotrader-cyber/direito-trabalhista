import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';
import { guides } from '../toolsData';
import AdSensePlaceholder from '../components/AdSensePlaceholder';

export default function Guias() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Guias Trabalhistas</h1>
        <p className="text-gray-600">Artigos completos para ajudar você a entender seus direitos trabalhistas.</p>
      </div>

      <AdSensePlaceholder format="horizontal" className="mb-8" />

      <div className="space-y-4">
        {guides.map(guide => (
          <Link
            key={guide.id}
            to={`/guias/${guide.id}`}
            className="card block group hover:border-primary-200 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-100 transition-colors">
                <BookOpen className="w-6 h-6 text-amber-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {guide.title}
                </h2>
                <p className="text-sm text-gray-500 mt-1">{guide.description}</p>
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">{guide.category}</span>
                  <span className="text-xs text-gray-400 flex items-center gap-1 ml-auto group-hover:text-primary-500">
                    Ler mais <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
