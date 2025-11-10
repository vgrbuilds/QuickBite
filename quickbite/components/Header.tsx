
import React from 'react';
import { LogoIcon, LeftArrowIcon } from './Icons';

interface HeaderProps {
  cartItemCount: number;
  onBack: () => void;
  showBack: boolean;
}

const Header: React.FC<HeaderProps> = ({ onBack, showBack }) => {
  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-20 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
             {showBack ? (
              <button onClick={onBack} className="mr-4 p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500">
                <LeftArrowIcon className="h-6 w-6 text-gray-600" />
              </button>
            ) : <div className="mr-4 w-10"></div>}
            <div className="flex items-center space-x-2">
              <LogoIcon className="h-8 w-8 text-orange-500" />
              <h1 className="text-2xl font-bold text-gray-800 tracking-tight">QuickBite</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
