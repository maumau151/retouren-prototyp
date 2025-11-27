import { Search, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { products } from '../data/products';
import type { Product } from '../App';

interface HomePageProps {
  onCategorySelect: (category: string) => void;
  onProductSelect: (product: Product) => void;
}

export function HomePage({ onCategorySelect, onProductSelect }: HomePageProps) {
  const categories = [
    { name: 'Smartphones', icon: '📱' },
    { name: 'Tablets', icon: '📲' },
    { name: 'Laptops', icon: '💻' },
    { name: 'Kopfhörer', icon: '🎧' },
    { name: 'Smartwatches', icon: '⌚' },
    { name: 'Kameras', icon: '📷' }
  ];

  const featuredProducts = products.filter((p) => p.originalPrice);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 z-10">
        <div className="px-4 py-4">
          <h1 className="text-white mb-3">TechZone</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Produkte suchen..."
              className="w-full pl-10 pr-4 py-2.5 bg-white rounded-lg text-gray-900 placeholder-gray-500"
            />
          </div>
        </div>
      </header>

      {/* Banner */}
      <div className="relative h-40 bg-gradient-to-br from-purple-500 to-pink-500 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-between px-6 text-white">
          <div>
            <p className="text-sm opacity-90">Black Friday Sale</p>
            <h2 className="text-white mt-1">Bis zu 40% Rabatt</h2>
            <button className="mt-3 px-4 py-1.5 bg-white text-purple-600 rounded-full">
              Jetzt shoppen
            </button>
          </div>
          <div className="text-6xl opacity-20">🎉</div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white px-4 py-5 mb-2">
        <h3 className="text-gray-900 mb-4">Kategorien</h3>
        <div className="grid grid-cols-3 gap-3">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => onCategorySelect(category.name)}
              className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <span className="text-3xl">{category.icon}</span>
              <span className="text-sm text-gray-700">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Flash Deals */}
      <div className="bg-white px-4 py-5 mb-2">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-gray-900">⚡ Flash Deals</h3>
            <p className="text-sm text-gray-500">Limitierte Angebote</p>
          </div>
          <button className="text-blue-600 text-sm flex items-center gap-1">
            Alle <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide -mx-4 px-4">
          {featuredProducts.map((product) => (
            <button
              key={product.id}
              onClick={() => onProductSelect(product)}
              className="flex-shrink-0 w-40 text-left"
            >
              <div className="relative bg-gray-100 rounded-xl overflow-hidden mb-2">
                <ImageWithFallback
                  src={`https://source.unsplash.com/featured/400x400/?${encodeURIComponent(product.image)}`}
                  alt={product.name}
                  className="w-full h-40 object-cover"
                />
                {product.originalPrice && (
                  <div className="absolute top-2 left-2 px-2 py-1 bg-red-500 text-white text-xs rounded">
                    -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </div>
                )}
              </div>
              <p className="text-sm text-gray-600 mb-1">{product.brand}</p>
              <p className="text-sm text-gray-900 mb-2 line-clamp-2">{product.name}</p>
              <div className="flex items-baseline gap-2">
                <p className="text-blue-600">CHF {product.price}.-</p>
                {product.originalPrice && (
                  <p className="text-xs text-gray-400 line-through">CHF {product.originalPrice}.-</p>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Popular Products */}
      <div className="bg-white px-4 py-5">
        <h3 className="text-gray-900 mb-4">Beliebte Produkte</h3>
        <div className="space-y-3">
          {products.slice(0, 4).map((product) => (
            <button
              key={product.id}
              onClick={() => onProductSelect(product)}
              className="flex gap-3 w-full p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                <ImageWithFallback
                  src={`https://source.unsplash.com/featured/200x200/?${encodeURIComponent(product.image)}`}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 text-left">
                <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
                <p className="text-sm text-gray-900 mb-2">{product.name}</p>
                <p className="text-blue-600">CHF {product.price}.-</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 self-center" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
