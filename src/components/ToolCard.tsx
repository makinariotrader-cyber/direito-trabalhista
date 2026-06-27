import { Link } from 'react-router-dom';
import { Calculator, ArrowRight } from 'lucide-react';
import type { Tool } from '../types';

interface Props {
  tool: Tool;
}

export default function ToolCard({ tool }: Props) {
  return (
    <Link
      to={`/ferramentas/${tool.id}`}
      className="card group cursor-pointer"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 transition-colors">
          <Calculator className="w-5 h-5 text-primary-600" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors truncate">
            {tool.title}
          </h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
            {tool.description}
          </p>
          <div className="flex items-center gap-2 mt-3">
            <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">
              {tool.category}
            </span>
            <span className="text-xs text-gray-400 flex items-center gap-1 ml-auto group-hover:text-primary-500 transition-colors">
              Calcular <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
