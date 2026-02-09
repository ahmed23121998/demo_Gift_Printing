import React, { useState } from 'react';
import { ShoppingCart, Heart, Eye, Star } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../hooks/useCart';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addToCart } = useCart();
  const [isLiked, setIsLiked] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    onQuickView(product);
  };

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      {/* Product Image */}
      <div className="relative overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-64 object-cover transition-all duration-300 group-hover:scale-110 ${
            isImageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsImageLoaded(true)}
        />
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
        )}
        
        {/* Badges */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2">
          {product.featured && (
            <span className="bg-yellow-500 text-white px-2 py-1 text-xs font-semibold rounded-full">
              مميز
            </span>
          )}
          {product.discount && (
            <span className="bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded-full">
              -{product.discount}%
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-2 rounded-full transition-colors duration-200 ${
              isLiked ? 'bg-red-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Heart className="h-4 w-4" fill={isLiked ? 'currentColor' : 'none'} />
          </button>
          <button
            onClick={handleQuickView}
            className="p-2 bg-white text-gray-600 rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            <Eye className="h-4 w-4" />
          </button>
        </div>

        {/* Quick Add to Cart */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-amber-500 hover:to-orange-500 text-white py-3 px-4 rounded-xl flex items-center justify-center space-x-2 space-x-reverse transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="text-sm font-medium">أضف للسلة</span>
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Category */}
        <p className="text-sm text-gray-500 mb-1">{product.category}</p>
        
        {/* Product Name */}
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center space-x-1 space-x-reverse mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="text-sm text-gray-500 mr-2">(4.8)</span>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 space-x-reverse">
            <span className="text-lg font-bold text-gray-900">{product.price}</span>
            <span className="text-sm text-gray-500">جنيه</span>
          </div>
          
          <button
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-amber-500 hover:to-orange-500 text-white p-3 rounded-xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl transform active:scale-95"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};