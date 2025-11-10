
import React, { useState } from 'react';
import { Canteen, CartItem, MenuItem } from '../types';
import MenuItemCard from './MenuItemCard';
import Cart from './Cart';
import { CartIcon } from './Icons';

interface MenuViewProps {
  canteen: Canteen;
  cart: CartItem[];
  addToCart: (item: MenuItem) => void;
  updateCartItemQuantity: (itemId: string, quantity: number) => void;
  onPlaceOrder: () => void;
  isLoading: boolean;
}

const MenuView: React.FC<MenuViewProps> = ({ canteen, cart, addToCart, updateCartItemQuantity, onPlaceOrder, isLoading }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="animate-fade-in">
      <div className="mb-6 bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-gray-900">{canteen.name}</h2>
        <p className="mt-1 text-gray-600">Browse the menu and add items to your cart.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {canteen.menu.map((item) => (
          <MenuItemCard key={item.id} item={item} onAddToCart={() => addToCart(item)} />
        ))}
      </div>

      {cartItemCount > 0 && (
        <div className="fixed bottom-4 right-4 z-30">
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-transform transform hover:scale-110"
          >
            <CartIcon className="h-7 w-7" />
            <span className="absolute -top-1 -right-1 flex items-center justify-center h-6 w-6 text-xs font-bold bg-red-500 text-white rounded-full">
              {cartItemCount}
            </span>
          </button>
        </div>
      )}

      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        updateCartItemQuantity={updateCartItemQuantity}
        onPlaceOrder={onPlaceOrder}
        isLoading={isLoading}
      />
    </div>
  );
};

export default MenuView;
