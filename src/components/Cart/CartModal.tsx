import React from 'react';
import { X, ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../../hooks/useCart';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

export const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, onCheckout }) => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  if (!isOpen) return null;

  const handleCheckout = () => {
    onClose();
    onCheckout();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center space-x-2 space-x-reverse">
            <ShoppingCart className="h-6 w-6 text-yellow-600" />
            <h2 className="text-xl font-bold text-gray-900">سلة التسوق</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Cart Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.items.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">السلة فارغة</h3>
              <p className="text-gray-500">أضف بعض المنتجات للمتابعة</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.items.map(item => (
                <div key={item.product.id} className="flex items-center space-x-4 space-x-reverse bg-gray-50 p-4 rounded-xl">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.product.name}</h3>
                    <p className="text-sm text-gray-600">{item.product.category}</p>
                    <p className="text-lg font-bold text-yellow-600">{item.product.price} جنيه</p>
                  </div>

                  <div className="flex items-center space-x-2 space-x-reverse">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="p-1 border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-3 py-1 border border-gray-300 rounded min-w-[40px] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="p-1 border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.items.length > 0 && (
          <div className="border-t p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xl font-bold text-gray-900">الإجمالي:</span>
              <span className="text-2xl font-bold text-yellow-600">{cart.total} جنيه</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-amber-500 hover:to-orange-500 text-white py-4 px-6 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              إتمام الطلب
            </button>
          </div>
        )}
      </div>
    </div>
  );
};