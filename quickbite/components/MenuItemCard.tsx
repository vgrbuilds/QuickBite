import React from 'react';
import { MenuItem } from '../types';
import Button from './Button';
import { PlusIcon } from './Icons';

interface MenuItemCardProps {
  item: MenuItem;
  onAddToCart: () => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, onAddToCart }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col justify-between transition-shadow hover:shadow-xl">
      <img className="h-48 w-full object-cover" src={item.image} alt={item.name} />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
        <p className="mt-1 text-gray-600 text-sm flex-grow">{item.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <p className="text-lg font-bold text-orange-500">₹{item.price.toFixed(2)}</p>
          <Button onClick={onAddToCart} size="sm" variant="secondary">
              <PlusIcon className="h-4 w-4 mr-1" />
            <span>Add</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;