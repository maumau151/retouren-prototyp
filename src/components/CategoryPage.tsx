import { ChevronLeft, SlidersHorizontal } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { products } from '../data/products';
import type { Product } from '../App';

interface CategoryPageProps {
  category: string;
  onBack: () => void;
  onProductSelect: (product: Product) => void;
}

export function CategoryPage({ category, onBack, onProductSelect }: CategoryPageProps) {
  const categoryProducts = products.filter((p) => p.category === category);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="flex items-center justify-between px-4 h-14">
          <button onClick={onBack} className="text-gray-700">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h2 className="text-gray-900">{category}</h2>
          <button className="text-gray-700">
            <SlidersHorizontal className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Filters */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          <button className="px-4 py-1.5 bg-blue-600 text-white rounded-full whitespace-nowrap">
            Alle
          </button>
          <button className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full whitespace-nowrap">
            Preis: Niedrig - Hoch
          </button>
          <button className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full whitespace-nowrap">
            Beliebteste
          </button>
          <button className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full whitespace-nowrap">
            Bewertung
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-4">{categoryProducts.length} Produkte gefunden</p>
        <div className="grid grid-cols-2 gap-3">
          {categoryProducts.map((product) => (
            <button
              key={product.id}
              onClick={() => onProductSelect(product)}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow text-left"
            >
              <div className="relative bg-gray-100">
                <ImageWithFallback
                  src={`https://source.unsplash.com/featured/400x400/?${encodeURIComponent(product.image)}`}
                  alt={product.name}
                  className="w-full h-44 object-cover"
                />
                {product.originalPrice && (
                  <div className="absolute top-2 left-2 px-2 py-1 bg-red-500 text-white text-xs rounded">
                    -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </div>
                )}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <span className="text-white text-sm">Ausverkauft</span>
                  </div>
                )}
              </div>
              <div className="p-3">
                <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
                <p className="text-sm text-gray-900 mb-2 line-clamp-2 h-10">{product.name}</p>
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-yellow-400">★</span>
                  <span className="text-xs text-gray-600">{product.rating}</span>
                  <span className="text-xs text-gray-400">({product.reviews})</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <p className="text-blue-600">CHF {product.price}.-</p>
                  {product.originalPrice && (
                    <p className="text-xs text-gray-400 line-through">
                      CHF {product.originalPrice}.-
                    </p>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
