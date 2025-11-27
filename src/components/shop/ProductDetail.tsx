import { ChevronLeft, Star, Heart, Share2, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { Product } from '../../types/shop';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product) => void;
}

export function ProductDetail({ product, onBack, onAddToCart }: ProductDetailProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showAddedToCart, setShowAddedToCart] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    setShowAddedToCart(true);
    setTimeout(() => setShowAddedToCart(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="px-4 py-4 flex items-center justify-between">
          <button onClick={onBack} className="text-gray-900">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={`${isFavorite ? 'text-red-500' : 'text-gray-900'}`}
            >
              <Heart className="w-6 h-6" fill={isFavorite ? 'currentColor' : 'none'} />
            </button>
            <button className="text-gray-900">
              <Share2 className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Product Image */}
      <div className="aspect-square bg-gray-100">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
          <h1 className="text-gray-900 mb-2">{product.name}</h1>
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-gray-900">{product.rating}</span>
            </div>
            <span className="text-gray-500">({product.reviews} Bewertungen)</span>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-gray-900">CHF {product.price.toLocaleString()}</p>
            {product.originalPrice && (
              <>
                <p className="text-gray-400 line-through">
                  CHF {product.originalPrice.toLocaleString()}
                </p>
                <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">
                  -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </span>
              </>
            )}
          </div>
        </div>

        {/* Colors */}
        {product.colors && product.colors.length > 0 && (
          <div className="mb-6">
            <p className="text-gray-900 mb-3">Farbe: {selectedColor}</p>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                    selectedColor === color
                      ? 'border-blue-600 bg-blue-50 text-blue-600'
                      : 'border-gray-200 bg-white text-gray-700'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Description */}
        <div className="mb-6">
          <h3 className="text-gray-900 mb-2">Produktbeschreibung</h3>
          <p className="text-gray-600">{product.description}</p>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h3 className="text-gray-900 mb-3">Eigenschaften</h3>
          <ul className="space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Stock Status */}
        <div className="mb-6">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className={product.inStock ? 'text-green-600' : 'text-red-600'}>
              {product.inStock ? 'Auf Lager' : 'Ausverkauft'}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-gray-200 p-4 max-w-md mx-auto">
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`w-full py-4 rounded-lg flex items-center justify-center gap-2 ${
            product.inStock
              ? 'bg-blue-600 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <ShoppingCart className="w-5 h-5" />
          {showAddedToCart ? 'In den Warenkorb gelegt!' : 'In den Warenkorb'}
        </button>
      </div>
    </div>
  );
}