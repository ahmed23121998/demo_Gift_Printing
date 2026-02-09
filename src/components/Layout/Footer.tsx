import React from 'react';
import { Gift, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 space-x-reverse mb-4">
              <div className="bg-yellow-500 p-2 rounded-full">
                <Gift className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Gift Printing</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              متجر متخصص في طباعة الهدايا المخصصة عالية الجودة. نحن نقدم خدمات الطباعة على مختلف المنتجات لتجعل هداياك مميزة ولا تُنسى.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">المنتجات</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">الفئات</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">المنتجات المميزة</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">من نحن</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 space-x-reverse">
                <Phone className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-300">01274755272</span>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse">
                <Mail className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-300">Josephfayk78@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse">
                <MapPin className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-300">طما, مصر</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Gift Printing. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};