import { Star } from 'lucide-react';
import { Product } from '../../types/shop';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="aspect-square bg-gray-100 relative">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.originalPrice && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            SALE
          </div>
        )}
      </div>
      <div className="p-3">
        <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
        <h4 className="text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem]">{product.name}</h4>
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs text-gray-600">
            {product.rating} ({product.reviews})
          </span>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-gray-900">CHF {product.price.toLocaleString()}</p>
          {product.originalPrice && (
            <p className="text-xs text-gray-400 line-through">
              CHF {product.originalPrice.toLocaleString()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}