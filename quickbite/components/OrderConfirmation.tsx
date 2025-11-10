
import React from 'react';
import Button from './Button';
import { CheckCircleIcon } from './Icons';

interface OrderConfirmationProps {
  onNewOrder: () => void;
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({ onNewOrder }) => {
  return (
    <div className="text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] animate-fade-in">
       <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        <CheckCircleIcon className="mx-auto h-16 w-16 text-green-500" />
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Order Placed!
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Thank you! Your order has been received and is being prepared. We'll notify you when it's ready for pickup.
        </p>
        <div className="mt-8">
          <Button onClick={onNewOrder} size="lg" className="w-full">
            Place Another Order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
