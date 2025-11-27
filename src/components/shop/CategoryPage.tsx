import { ChevronLeft, SlidersHorizontal } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { products } from '../../data/products';
import { Product } from '../../types/shop';

interface CategoryPageProps {
  category: string | null;
  onProductClick: (product: Product) => void;
  onBack: () => void;
}

export function CategoryPage({ category, onProductClick, onBack }: CategoryPageProps) {
  const filteredProducts = category
    ? products.filter(p => p.category === category)
    : products;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={onBack} className="text-gray-900">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h2 className="text-gray-900">{category || 'Alle Produkte'}</h2>
          </div>
          <button className="text-gray-900">
            <SlidersHorizontal className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Filter Pills */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          <button className="px-4 py-1.5 bg-gray-900 text-white rounded-full whitespace-nowrap text-sm">
            Alle
          </button>
          <button className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full whitespace-nowrap text-sm">
            Preis aufsteigend
          </button>
          <button className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full whitespace-nowrap text-sm">
            Bestseller
          </button>
          <button className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full whitespace-nowrap text-sm">
            Neu
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="p-4">
        <p className="text-sm text-gray-600 mb-4">
          {filteredProducts.length} Produkte gefunden
        </p>
        <div className="grid grid-cols-2 gap-3">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => onProductClick(product)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}