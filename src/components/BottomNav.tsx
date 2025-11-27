import { Home, Search, ShoppingCart, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  cartCount: number;
}

export function BottomNav({ activeTab, onTabChange, cartCount }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 max-w-md mx-auto">
      <div className="flex justify-around items-center h-16">
        <button
          onClick={() => onTabChange('home')}
          className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
            activeTab === 'home' ? 'text-blue-600' : 'text-gray-500'
          }`}
        >
          <Home className="w-6 h-6 mb-1" />
          <span className="text-xs">Home</span>
        </button>
        
        <button
          className="flex flex-col items-center justify-center w-full h-full text-gray-500"
        >
          <Search className="w-6 h-6 mb-1" />
          <span className="text-xs">Suchen</span>
        </button>
        
        <button
          onClick={() => onTabChange('cart')}
          className={`flex flex-col items-center justify-center w-full h-full transition-colors relative ${
            activeTab === 'cart' ? 'text-blue-600' : 'text-gray-500'
          }`}
        >
          <div className="relative">
            <ShoppingCart className="w-6 h-6 mb-1" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-xs">Warenkorb</span>
        </button>
        
        <button
          className="flex flex-col items-center justify-center w-full h-full text-gray-500"
        >
          <User className="w-6 h-6 mb-1" />
          <span className="text-xs">Konto</span>
        </button>
      </div>
    </nav>
  );
}
