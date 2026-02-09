import React from 'react';
import { ShoppingCart, Search, Gift, User } from 'lucide-react';
import { useCart } from '../../hooks/useCart';

interface HeaderProps {
  onSearchChange: (query: string) => void;
  onCartClick: () => void;
  onAdminClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onSearchChange,
  onCartClick,
  onAdminClick
}) => {
const { cart } = useCart();
const itemCount = cart.items.reduce((sum, i) => sum + i.quantity, 0);
  return (
    <header className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        
        {/* Wrapper */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start space-x-2 space-x-reverse">
            <div className="bg-white p-2 rounded-full">
              <Gift className="h-7 w-7 md:h-8 md:w-8 text-yellow-600" />
            </div>
            <div className="text-center md:text-right">
              <h1 className="text-xl md:text-2xl font-bold text-white">
                Gift Printing
              </h1>
              <p className="text-yellow-100 text-xs md:text-sm">
                متجر الهدايا المطبوعة
              </p>
            </div>
          </div>

          {/* Search */}
          <div className="w-full md:flex-1 md:max-w-md md:mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="البحث عن المنتجات..."
                onChange={(e) => onSearchChange(e.target.value)}
                className="
                  w-full px-4 py-2 pr-10
                  rounded-full border-0 shadow-md
                  focus:outline-none focus:ring-2 focus:ring-white
                  text-right text-sm md:text-base
                "
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-center md:justify-end space-x-4 space-x-reverse">
            <button
              onClick={onAdminClick}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
            >
              <User className="h-5 w-5 md:h-6 md:w-6" />
            </button>

            <button
              onClick={onCartClick}
              className="relative bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
            >
              <ShoppingCart className="h-5 w-5 md:h-6 md:w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {itemCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
