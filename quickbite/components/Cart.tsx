import React from 'react';
import { CartItem } from '../types';
import Button from './Button';
import Spinner from './Spinner';
import { CloseIcon, PlusIcon, MinusIcon, TrashIcon } from './Icons';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  updateCartItemQuantity: (itemId: string, quantity: number) => void;
  onPlaceOrder: () => void;
  isLoading: boolean;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, cartItems, updateCartItemQuantity, onPlaceOrder, isLoading }) => {
  const total = cartItems.reduce((sum, item) => sum + item.item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose}>
      <div 
        className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out"
        onClick={(e) => e.stopPropagation()}
        style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-2xl font-bold text-gray-800">Your Order</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100">
            <CloseIcon className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        
        {cartItems.length === 0 ? (
          <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
             <img src="https://loremflickr.com/200/200/food,plate,empty" alt="Empty cart" className="rounded-full w-40 h-40 object-cover mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">Your cart is empty</h3>
            <p className="text-gray-500 mt-2">Add some delicious food from the menu to get started!</p>
          </div>
        ) : (
          <div className="flex-grow overflow-y-auto p-4 space-y-4">
            {cartItems.map(({ item, quantity }) => (
              <div key={item.id} className="flex items-center space-x-4 bg-gray-50 p-3 rounded-lg">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md object-cover" />
                <div className="flex-grow">
                  <h4 className="font-semibold text-gray-800">{item.name}</h4>
                  <p className="text-sm text-gray-500">₹{item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button onClick={() => updateCartItemQuantity(item.id, quantity - 1)} className="p-1 rounded-full bg-gray-200 hover:bg-gray-300">
                    {quantity > 1 ? <MinusIcon className="h-4 w-4" /> : <TrashIcon className="h-4 w-4 text-red-500" />}
                  </button>
                  <span className="w-8 text-center font-semibold">{quantity}</span>
                   <button onClick={() => updateCartItemQuantity(item.id, quantity + 1)} className="p-1 rounded-full bg-gray-200 hover:bg-gray-300">
                    <PlusIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {cartItems.length > 0 && (
          <div className="p-4 border-t bg-white">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-medium text-gray-600">Total</span>
              <span className="text-2xl font-bold text-gray-900">₹{total.toFixed(2)}</span>
            </div>
            <Button onClick={onPlaceOrder} size="lg" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <Spinner size="sm" /> <span className="ml-2">Placing Order...</span>
                </div>
              ) : (
                'Place Order'
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;