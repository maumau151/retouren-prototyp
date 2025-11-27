import { Search, ChevronRight, Smartphone, Laptop, Tablet, Headphones, Watch } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { Logo } from './Logo';
import { products } from '../../data/products';
import { Product } from '../../types/shop';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HomePageProps {
  onProductClick: (product: Product) => void;
  onCategorySelect: (category: string) => void;
}

export function HomePage({ onProductClick, onCategorySelect }: HomePageProps) {
  const categories = [
    { name: 'Smartphones', icon: Smartphone, color: 'bg-blue-500' },
    { name: 'Laptops', icon: Laptop, color: 'bg-purple-500' },
    { name: 'Tablets', icon: Tablet, color: 'bg-green-500' },
    { name: 'Audio', icon: Headphones, color: 'bg-orange-500' },
    { name: 'Wearables', icon: Watch, color: 'bg-pink-500' }
  ];

  const featuredProducts = products.filter(p => p.originalPrice);
  const newArrivals = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-200 z-10 shadow-sm">
        <div className="px-4 py-3">
          <div className="mb-3">
            <Logo />
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Produkte suchen..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-100 rounded-lg text-gray-900 placeholder-gray-500"
            />
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="px-4 py-4">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
          <h2 className="mb-2">Cyber Week Deals</h2>
          <p className="text-blue-100 mb-4">Bis zu 30% Rabatt auf ausgewählte Produkte</p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg">
            Jetzt entdecken
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 mb-6">
        <h3 className="text-gray-900 mb-3">Kategorien</h3>
        <div className="grid grid-cols-3 gap-3">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => onCategorySelect(category.name)}
                className="bg-white rounded-xl p-4 flex flex-col items-center gap-2 shadow-sm"
              >
                <div className={`${category.color} w-12 h-12 rounded-full flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm text-gray-900">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured Deals */}
      <div className="mb-6">
        <div className="px-4 mb-3 flex items-center justify-between">
          <h3 className="text-gray-900">Top Angebote</h3>
          <button className="text-blue-600 text-sm flex items-center gap-1">
            Alle anzeigen
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="px-4 flex gap-4 overflow-x-auto scrollbar-hide">
          {featuredProducts.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-44">
              <ProductCard product={product} onClick={() => onProductClick(product)} />
            </div>
          ))}
        </div>
      </div>

      {/* New Arrivals */}
      <div className="mb-6">
        <div className="px-4 mb-3">
          <h3 className="text-gray-900">Neuheiten</h3>
        </div>
        <div className="px-4 grid grid-cols-2 gap-3">
          {newArrivals.map((product) => (
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