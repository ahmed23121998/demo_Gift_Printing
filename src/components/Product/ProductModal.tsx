import React, { useState } from 'react';
import { X, ShoppingCart, Plus, Minus, Heart } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../hooks/useCart';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    onClose();
  };

  const images = product.images || [product.image];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-bold text-gray-900">تفاصيل المنتج</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Images */}
            <div>
              <div className="mb-4">
                <img
                  src={images[selectedImage]}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              {images.length > 1 && (
                <div className="flex space-x-2 space-x-reverse">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === index ? 'border-yellow-500' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div>
              <div className="mb-4">
                <span className="text-sm text-yellow-600 font-medium">{product.category}</span>
                <h1 className="text-2xl font-bold text-gray-900 mt-1">{product.name}</h1>
              </div>

              <div className="flex items-center space-x-4 space-x-reverse mb-6">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                  <span className="text-lg text-gray-500">جنيه</span>
                </div>
                
                {product.discount && (
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                    خصم {product.discount}%
                  </span>
                )}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  الكمية
                </label>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 border border-gray-300 rounded-lg min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-4 space-x-reverse">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-amber-500 hover:to-orange-500 text-white py-4 px-6 rounded-xl flex items-center justify-center space-x-2 space-x-reverse transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-bold text-lg"
                >
                  <ShoppingCart className="h-6 w-6" />
                  <span>أضف للسلة</span>
                </button>
                
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`p-3 rounded-lg border-2 transition-colors ${
                    isLiked 
                      ? 'border-red-500 bg-red-50 text-red-500' 
                      : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Heart className="h-5 w-5" fill={isLiked ? 'currentColor' : 'none'} />
                </button>
              </div>

              {/* Product Features */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full ml-3"></span>
                  جودة عالية مضمونة
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full ml-3"></span>
                  طباعة مخصصة حسب الطلب
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full ml-3"></span>
                  توصيل سريع
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};