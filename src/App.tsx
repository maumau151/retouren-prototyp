import { useState } from 'react';
import { HomePage } from './components/shop/HomePage';
import { CategoryPage } from './components/shop/CategoryPage';
import { ProductDetail } from './components/shop/ProductDetail';
import { CartPage } from './components/shop/CartPage';
import { AccountPage } from './components/shop/AccountPage';
import { BottomNav } from './components/shop/BottomNav';
import { Notification } from './components/shop/Notification';
import { Product } from './types/shop';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'categories' | 'cart' | 'account'>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<Array<Product & { quantity: number }>>([]);
  const [notification, setNotification] = useState<{ title: string; message: string } | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleBackToHome = () => {
    setSelectedProduct(null);
    setSelectedCategory(null);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentView('categories');
  };

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    if (quantity === 0) {
      setCartItems(prev => prev.filter(item => item.id !== productId));
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const showNotification = (title: string, message: string) => {
    setNotification({ title, message });
    setTimeout(() => setNotification(null), 4000);
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 pb-20 max-w-md mx-auto relative">
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}
      
      {selectedProduct ? (
        <ProductDetail
          product={selectedProduct}
          onBack={handleBackToHome}
          onAddToCart={handleAddToCart}
        />
      ) : (
        <>
          {currentView === 'home' && (
            <HomePage
              onProductClick={handleProductClick}
              onCategorySelect={handleCategorySelect}
            />
          )}
          {currentView === 'categories' && (
            <CategoryPage
              category={selectedCategory}
              onProductClick={handleProductClick}
              onBack={() => setCurrentView('home')}
            />
          )}
          {currentView === 'cart' && (
            <CartPage
              items={cartItems}
              onUpdateQuantity={handleUpdateQuantity}
            />
          )}
          {currentView === 'account' && (
            <AccountPage onNotification={showNotification} />
          )}
        </>
      )}
      
      <BottomNav
        activeTab={currentView}
        onTabChange={setCurrentView}
        cartItemCount={cartItemCount}
      />
    </div>
  );
}