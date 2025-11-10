
import React, { useState, useCallback } from 'react';
import { Canteen, CartItem, Order, AppView } from './types';
import Header from './components/Header';
import CanteenFinder from './components/CanteenFinder';
import MenuView from './components/MenuView';
import OrderConfirmation from './components/OrderConfirmation';
import { placeOrder as placeOrderService } from './services/firebaseService';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.FINDER);
  const [selectedCanteen, setSelectedCanteen] = useState<Canteen | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleCanteenSelected = (canteen: Canteen) => {
    setSelectedCanteen(canteen);
    setCurrentView(AppView.MENU);
  };
  
  const addToCart = useCallback((item: CartItem['item']) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.item.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.item.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
      return [...prevCart, { item, quantity: 1 }];
    });
  }, []);

  const updateCartItemQuantity = useCallback((itemId: string, quantity: number) => {
    setCart((prevCart) => {
      if (quantity <= 0) {
        return prevCart.filter((cartItem) => cartItem.item.id !== itemId);
      }
      return prevCart.map((cartItem) =>
        cartItem.item.id === itemId ? { ...cartItem, quantity } : cartItem
      );
    });
  }, []);

  const clearCart = () => {
    setCart([]);
  }

  const handlePlaceOrder = async () => {
    if (!selectedCanteen || cart.length === 0) return;
    setIsLoading(true);
    setError(null);
    try {
      const total = cart.reduce((sum, cartItem) => sum + cartItem.item.price * cartItem.quantity, 0);
      const order: Order = {
        canteenId: selectedCanteen.id,
        items: cart,
        total,
        orderTime: new Date(),
      };
      await placeOrderService(order);
      setCurrentView(AppView.CONFIRMATION);
      setCart([]);
    } catch (err) {
      setError('Failed to place order. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const startNewOrder = () => {
    setSelectedCanteen(null);
    setCart([]);
    setCurrentView(AppView.FINDER);
  };
  
  const navigateBack = () => {
    if (currentView === AppView.MENU) {
      startNewOrder();
    }
  }

  const renderView = () => {
    switch (currentView) {
      case AppView.FINDER:
        return <CanteenFinder onCanteenSelected={handleCanteenSelected} />;
      case AppView.MENU:
        if (!selectedCanteen) {
          startNewOrder();
          return null;
        }
        return (
          <MenuView 
            canteen={selectedCanteen} 
            cart={cart}
            addToCart={addToCart}
            updateCartItemQuantity={updateCartItemQuantity}
            onPlaceOrder={handlePlaceOrder}
            isLoading={isLoading}
          />
        );
      case AppView.CONFIRMATION:
        return <OrderConfirmation onNewOrder={startNewOrder} />;
      default:
        return <CanteenFinder onCanteenSelected={handleCanteenSelected} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header cartItemCount={cart.reduce((sum, item) => sum + item.quantity, 0)} onBack={navigateBack} showBack={currentView === AppView.MENU} />
      <main className="max-w-4xl mx-auto p-4 md:p-6">
        {renderView()}
      </main>
    </div>
  );
};

export default App;
