import { ChevronRight, Package, User as UserIcon, MapPin, CreditCard } from 'lucide-react';
import { useState } from 'react';
import { OrderHistory } from './OrderHistory';
import { ReturnFlow } from './ReturnFlow';

interface AccountPageProps {
  onNotification: (title: string, message: string) => void;
}

export function AccountPage({ onNotification }: AccountPageProps) {
  const [view, setView] = useState<'menu' | 'orders' | 'return'>('menu');
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

  const handleReturnClick = (orderId: string) => {
    setSelectedOrderId(orderId);
    setView('return');
  };

  if (view === 'orders') {
    return (
      <OrderHistory
        onBack={() => setView('menu')}
        onReturnClick={handleReturnClick}
      />
    );
  }

  if (view === 'return' && selectedOrderId) {
    return (
      <ReturnFlow
        orderId={selectedOrderId}
        onBack={() => setView('orders')}
        onSuccess={() => {
          onNotification(
            'Retoure bestätigt',
            'Ihr Paket wird am gewählten Datum abgeholt.'
          );
          setView('orders');
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="px-4 py-4">
          <h1 className="text-gray-900">Mein Konto</h1>
        </div>
      </header>

      {/* Profile Card */}
      <div className="p-4">
        <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl">
              MS
            </div>
            <div>
              <h3 className="text-gray-900">Max Schweizer</h3>
              <p className="text-sm text-gray-600">max.schweizer@email.ch</p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-xl shadow-sm divide-y divide-gray-100">
          <button
            onClick={() => setView('orders')}
            className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Package className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-gray-900">Meine Bestellungen</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <UserIcon className="w-5 h-5 text-purple-600" />
              </div>
              <span className="text-gray-900">Persönliche Daten</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-gray-900">Adressen</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-orange-600" />
              </div>
              <span className="text-gray-900">Zahlungsmethoden</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
