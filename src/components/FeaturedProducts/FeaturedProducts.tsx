import React from 'react';
import { Star, ArrowLeft } from 'lucide-react';
import { mockProducts } from '../../data/mockProducts';
import { Product } from '../../types';

interface FeaturedProductsProps {
  onProductSelect: (product: Product) => void;
  onViewAll: () => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ onProductSelect, onViewAll }) => {
  const featuredProducts = mockProducts.filter(product => product.featured);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              المنتجات المميزة
            </h2>
            <p className="text-gray-600 text-lg">
              أفضل اختياراتنا لك بجودة عالية وتصميم رائع
            </p>
          </div>
          <button
            onClick={onViewAll}
            className="hidden md:flex items-center space-x-2 space-x-reverse text-yellow-600 hover:text-yellow-700 font-semibold transition-colors"
          >
            <span>عرض الكل</span>
            <ArrowLeft className="h-5 w-5" />
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredProducts.map(product => (
            <div
              key={product.id}
              onClick={() => onProductSelect(product)}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-yellow-500 text-white px-2 py-1 text-xs font-semibold rounded-full">
                    مميز
                  </span>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center space-x-1 space-x-reverse mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <span className="text-lg font-bold text-gray-900">{product.price}</span>
                    <span className="text-sm text-gray-500">جنيه</span>
                  </div>
                  <span className="text-sm text-yellow-600 font-medium">{product.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="text-center md:hidden">
          <button
            onClick={onViewAll}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            عرض جميع المنتجات
          </button>
        </div>
      </div>
    </section>
  );
};