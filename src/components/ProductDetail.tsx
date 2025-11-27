import { ChevronLeft, Heart, Share2, Star } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Product } from '../App';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product) => void;
}

export function ProductDetail({ product, onBack, onAddToCart }: ProductDetailProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState<'details' | 'specs'>('details');

  const handleAddToCart = () => {
    onAddToCart(product);
    // Show feedback (you could add a toast here)
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="flex items-center justify-between px-4 h-14">
          <button onClick={onBack} className="text-gray-700">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h2 className="text-gray-900">Produktdetails</h2>
          <button className="text-gray-700">
            <Share2 className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Product Image */}
      <div className="relative bg-gray-50 h-80">
        <ImageWithFallback
          src={`https://source.unsplash.com/featured/800x800/?${encodeURIComponent(product.image)}`}
          alt={product.name}
          className="w-full h-full object-contain p-8"
        />
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md"
        >
          <Heart
            className={`w-5 h-5 ${isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-700'}`}
          />
        </button>
        {product.originalPrice && (
          <div className="absolute top-4 left-4 px-3 py-1.5 bg-red-500 text-white rounded-lg">
            Spare CHF {product.originalPrice - product.price}.-
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="px-4 py-5">
        <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
        <h1 className="text-gray-900 mb-3">{product.name}</h1>

        {/* Rating */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {product.rating} ({product.reviews} Bewertungen)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-3 mb-4">
          <p className="text-blue-600 text-2xl">CHF {product.price}.-</p>
          {product.originalPrice && (
            <p className="text-gray-400 line-through">CHF {product.originalPrice}.-</p>
          )}
        </div>

        {/* Stock Status */}
        <div className="mb-6">
          {product.inStock ? (
            <p className="text-green-600 text-sm">✓ Auf Lager - Sofort lieferbar</p>
          ) : (
            <p className="text-red-600 text-sm">✕ Nicht verfügbar</p>
          )}
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-4">
          <div className="flex gap-6">
            <button
              onClick={() => setActiveTab('details')}
              className={`pb-3 border-b-2 transition-colors ${
                activeTab === 'details'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500'
              }`}
            >
              Details
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-3 border-b-2 transition-colors ${
                activeTab === 'specs'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500'
              }`}
            >
              Spezifikationen
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'details' && (
          <div className="text-gray-700 leading-relaxed">
            <p>{product.description}</p>
          </div>
        )}

        {activeTab === 'specs' && (
          <div className="space-y-3">
            {product.specs.map((spec, index) => (
              <div key={index} className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">{spec.label}</span>
                <span className="text-gray-900">{spec.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add to Cart Button */}
      <div className="fixed bottom-20 left-0 right-0 bg-white border-t border-gray-200 p-4 max-w-md mx-auto">
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`w-full py-3.5 rounded-xl text-white transition-colors ${
            product.inStock
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          {product.inStock ? 'In den Warenkorb' : 'Nicht verfügbar'}
        </button>
      </div>
    </div>
  );
}
