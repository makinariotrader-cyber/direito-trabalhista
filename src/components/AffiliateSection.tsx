import { ShoppingBag, ExternalLink } from 'lucide-react';
import type { AffiliateProduct } from '../types';

const AFFILIATES: Record<string, AffiliateProduct[]> = {
  'rescisao-trabalhista': [
    { title: 'Calculadora de Mesa', description: 'Calculadora financeira para cálculos trabalhistas', amazonUrl: 'https://amzn.to/4exemplo-calculadora', shopeeUrl: 'https://shopee.com.br/product/0000000000000000000' },
    { title: 'Kit Direito do Trabalho', description: 'Livro de direito trabalhista atualizado', amazonUrl: 'https://amzn.to/4exemplo-livro' },
  ],
  'fgts': [
    { title: 'Carteira de Trabalho Digital', description: 'Guia completo da CTPS digital', amazonUrl: 'https://amzn.to/4exemplo-ctps' },
  ],
};

interface Props {
  toolId: string;
}

export default function AffiliateSection({ toolId }: Props) {
  const products = AFFILIATES[toolId] || [];
  if (products.length === 0) return null;

  return (
    <div className="mt-10 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-200 p-6">
      <div className="flex items-center gap-2 mb-4">
        <ShoppingBag className="w-5 h-5 text-amber-600" />
        <h3 className="font-semibold text-gray-900">Produtos Recomendados</h3>
      </div>
      <p className="text-sm text-gray-500 mb-4">
        Produtos que podem ajudar no seu dia a dia profissional. Como Associado, ganho com compras qualificadas.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {products.map((p, i) => (
          <div key={i} className="bg-white rounded-lg border border-amber-100 p-3 hover:shadow-sm transition-shadow">
            <h4 className="font-medium text-sm text-gray-900 mb-1">{p.title}</h4>
            {p.description && <p className="text-xs text-gray-500 mb-2">{p.description}</p>}
            <div className="flex items-center gap-2">
              {p.amazonUrl && (
                <a href={p.amazonUrl} target="_blank" rel="sponsored noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 hover:text-amber-800">
                  Amazon <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {p.shopeeUrl && (
                <a href={p.shopeeUrl} target="_blank" rel="sponsored noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-medium text-orange-600 hover:text-orange-700">
                  Shopee <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
