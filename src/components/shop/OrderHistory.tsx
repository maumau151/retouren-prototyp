import { ChevronLeft, Package } from 'lucide-react';
import { orders } from '../../data/orders';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface OrderHistoryProps {
  onBack: () => void;
  onReturnClick: (orderId: string) => void;
}

export function OrderHistory({ onBack, onReturnClick }: OrderHistoryProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-700';
      case 'in-transit':
        return 'bg-blue-100 text-blue-700';
      case 'processing':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'Zugestellt';
      case 'in-transit':
        return 'Unterwegs';
      case 'processing':
        return 'In Bearbeitung';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={onBack} className="text-gray-900">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h2 className="text-gray-900">Meine Bestellungen</h2>
        </div>
      </header>

      {/* Orders List */}
      <div className="p-4 space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            {/* Order Header */}
            <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-900">{order.id}</span>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(order.status)}`}>
                  {getStatusText(order.status)}
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Bestellt am {new Date(order.date).toLocaleDateString('de-CH', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric'
                })}
              </p>
            </div>

            {/* Order Items */}
            <div className="p-4 space-y-3">
              {order.items.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900 mb-1">{item.name}</p>
                    <p className="text-xs text-gray-500 mb-1">Anzahl: {item.quantity}</p>
                    <p className="text-sm text-gray-900">CHF {item.price.toLocaleString()}</p>
                  </div>
                </div>
              ))}

              {/* Total */}
              <div className="pt-3 border-t border-gray-100 flex justify-between">
                <span className="text-gray-900">Gesamt</span>
                <span className="text-gray-900">CHF {order.total.toLocaleString()}</span>
              </div>

              {/* Actions */}
              {order.status === 'delivered' && (
                <div className="pt-2 flex gap-2">
                  <button className="flex-1 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                    Erneut bestellen
                  </button>
                  <button
                    onClick={() => onReturnClick(order.id)}
                    className="flex-1 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Zurücksenden
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}