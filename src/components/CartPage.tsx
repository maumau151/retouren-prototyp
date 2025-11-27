import { Minus, Plus, Trash2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { CartItem } from '../App';

interface CartPageProps {
  cart: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
}

export function CartPage({ cart, onUpdateQuantity }: CartPageProps) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 9.9 : 0;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
          <span className="text-5xl">🛒</span>
        </div>
        <h2 className="text-gray-900 mb-2">Warenkorb ist leer</h2>
        <p className="text-gray-500 text-center mb-6">
          Fügen Sie Produkte hinzu, um mit dem Einkauf zu beginnen
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="px-4 h-14 flex items-center justify-between">
          <h2 className="text-gray-900">Warenkorb</h2>
          <span className="text-sm text-gray-500">{cart.length} Artikel</span>
        </div>
      </header>

      {/* Cart Items */}
      <div className="p-4 space-y-3">
        {cart.map((item) => (
          <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex gap-3 mb-3">
              <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                <ImageWithFallback
                  src={`https://source.unsplash.com/featured/200x200/?${encodeURIComponent(item.image)}`}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500 mb-1">{item.brand}</p>
                <p className="text-sm text-gray-900 mb-2 line-clamp-2">{item.name}</p>
                <p className="text-blue-600">CHF {item.price}.-</p>
              </div>
              <button
                onClick={() => onUpdateQuantity(item.id, 0)}
                className="text-gray-400 hover:text-red-500 h-fit"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 flex items-center justify-center text-gray-700 hover:bg-white rounded transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center text-gray-900">{item.quantity}</span>
                <button
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center text-gray-700 hover:bg-white rounded transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <p className="text-gray-900">
                CHF {(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="fixed bottom-20 left-0 right-0 bg-white border-t border-gray-200 max-w-md mx-auto">
        <div className="p-4 space-y-3">
          <div className="flex justify-between text-gray-600">
            <span>Zwischensumme</span>
            <span>CHF {subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Versand</span>
            <span>{shipping === 0 ? 'Kostenlos' : `CHF ${shipping.toFixed(2)}`}</span>
          </div>
          <div className="border-t border-gray-200 pt-3 flex justify-between text-gray-900">
            <span>Total</span>
            <span className="text-blue-600">CHF {total.toFixed(2)}</span>
          </div>
          <button className="w-full py-3.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
            Zur Kasse ({cart.length})
          </button>
        </div>
      </div>
    </div>
  );
}
