import { Home, Grid, ShoppingCart, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: 'home' | 'categories' | 'cart' | 'account';
  onTabChange: (tab: 'home' | 'categories' | 'cart' | 'account') => void;
  cartItemCount: number;
}

export function BottomNav({ activeTab, onTabChange, cartItemCount }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 max-w-md mx-auto shadow-lg">
      <div className="flex justify-around items-center h-16">
        <button
          onClick={() => onTabChange('home')}
          className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
            activeTab === 'home' ? 'text-blue-600' : 'text-gray-500'
          }`}
        >
          <Home className="w-6 h-6 mb-1" />
          <span className="text-xs">Shop</span>
        </button>
        
        <button
          onClick={() => onTabChange('categories')}
          className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
            activeTab === 'categories' ? 'text-blue-600' : 'text-gray-500'
          }`}
        >
          <Grid className="w-6 h-6 mb-1" />
          <span className="text-xs">Kategorien</span>
        </button>
        
        <button
          onClick={() => onTabChange('cart')}
          className={`flex flex-col items-center justify-center w-full h-full transition-colors relative ${
            activeTab === 'cart' ? 'text-blue-600' : 'text-gray-500'
          }`}
        >
          <div className="relative">
            <ShoppingCart className="w-6 h-6 mb-1" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </div>
          <span className="text-xs">Warenkorb</span>
        </button>
        
        <button
          onClick={() => onTabChange('account')}
          className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
            activeTab === 'account' ? 'text-blue-600' : 'text-gray-500'
          }`}
        >
          <User className="w-6 h-6 mb-1" />
          <span className="text-xs">Konto</span>
        </button>
      </div>
    </nav>
  );
}
