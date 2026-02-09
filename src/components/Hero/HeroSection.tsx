import React from 'react';
import { Gift, Star, Heart, ShoppingBag } from 'lucide-react';

interface HeroSectionProps {
  onShopNow: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onShopNow }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-bl from-yellow-400 via-yellow-500 to-amber-600">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute transform rotate-12 -top-10 -right-10">
          <Gift className="h-32 w-32" />
        </div>
        <div className="absolute transform -rotate-12 top-20 right-1/4">
          <Star className="h-20 w-20" />
        </div>
        <div className="absolute transform rotate-45 bottom-20 left-1/3">
          <Heart className="h-24 w-24" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              اجعل هداياك
              <span className="block bg-gradient-to-r from-orange-200 to-pink-200 bg-clip-text text-transparent">
                لا تُنسى
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-yellow-100 leading-relaxed">
              طباعة مخصصة عالية الجودة على مجموعة واسعة من المنتجات
              <br />
              اجعل كل لحظة ذكرى جميلة
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={onShopNow}
                className="bg-white text-yellow-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center space-x-2 space-x-reverse"
              >
                <ShoppingBag className="h-6 w-6" />
                <span>تسوق الآن</span>
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-yellow-600 transition-all duration-300">
                شاهد المعرض
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold mb-1">500+</div>
                <div className="text-yellow-100 text-sm">عميل سعيد</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">100+</div>
                <div className="text-yellow-100 text-sm">منتج مختلف</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">4.9</div>
                <div className="text-yellow-100 text-sm">تقييم العملاء</div>
              </div>
            </div>
          </div>

          {/* Product Showcase */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-4">
                <img
                  src="https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg"
                  alt="مطبوعات عالية الجودة"
                  className="w-full h-48 object-cover rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg"
                  alt="تيشيرتات مطبوعة"
                  className="w-full h-32 object-cover rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="https://images.pexels.com/photos/1670770/pexels-photo-1670770.jpeg"
                  alt="براويز وذكريات"
                  className="w-full h-32 object-cover rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="https://images.pexels.com/photos/1568607/pexels-photo-1568607.jpeg"
                  alt="لوحات كانفس"
                  className="w-full h-48 object-cover rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};