import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { Product } from '../../types/shop';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface CartPageProps {
  items: Array<Product & { quantity: number }>;
  onUpdateQuantity: (productId: number, quantity: number) => void;
}

export function CartPage({ items, onUpdateQuantity }: CartPageProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 9.90 : 0;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 text-center max-w-sm">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h2 className="text-gray-900 mb-2">Warenkorb ist leer</h2>
          <p className="text-gray-600">Fügen Sie Produkte hinzu, um mit dem Einkauf zu beginnen.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="px-4 py-4">
          <h1 className="text-gray-900">Warenkorb ({items.length})</h1>
        </div>
      </header>

      {/* Cart Items */}
      <div className="p-4 space-y-3 mb-32">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between mb-1">
                  <h3 className="text-gray-900 line-clamp-2">{item.name}</h3>
                  <button
                    onClick={() => onUpdateQuantity(item.id, 0)}
                    className="text-red-500 flex-shrink-0 ml-2"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-sm text-gray-500 mb-2">{item.brand}</p>
                <div className="flex items-center justify-between">
                  <p className="text-gray-900">CHF {item.price.toLocaleString()}</p>
                  <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-2 py-1">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      className="text-gray-700"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-gray-900 w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="text-gray-700"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Summary */}
      <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-gray-200 max-w-md mx-auto">
        <div className="p-4">
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-gray-600">
              <span>Zwischensumme</span>
              <span>CHF {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Versand</span>
              <span>{shipping === 0 ? 'Kostenlos' : `CHF ${shipping.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between text-gray-900 border-t pt-2">
              <span>Total</span>
              <span>CHF {total.toFixed(2)}</span>
            </div>
          </div>
          <button className="w-full py-4 bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2">
            Zur Kasse
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}