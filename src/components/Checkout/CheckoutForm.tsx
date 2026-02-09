import React, { useState } from 'react';
import { ArrowRight, ShoppingBag, Phone, User, MessageSquare } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import { generateWhatsAppMessage, sendToWhatsApp } from '../../utils/whatsapp';
import { Customer } from '../../types';

interface CheckoutFormProps {
  onBack: () => void;
}

export const CheckoutForm: React.FC<CheckoutFormProps> = ({ onBack }) => {
  const { cart, clearCart } = useCart();
  const [customer, setCustomer] = useState<Customer>({
    fullName: '',
    phoneNumber: '',
    notes: ''
  });
  const [errors, setErrors] = useState<Partial<Customer>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<Customer> = {};

    if (!customer.fullName.trim()) {
      newErrors.fullName = 'الاسم مطلوب';
    }

    if (!customer.phoneNumber.trim()) {
      newErrors.phoneNumber = 'رقم الهاتف مطلوب';
    } else if (!/^01[0-2,5]{1}[0-9]{8}$/.test(customer.phoneNumber.replace(/\s/g, ''))) {
      newErrors.phoneNumber = 'رقم الهاتف غير صحيح';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    const message = generateWhatsAppMessage(cart, customer);
    sendToWhatsApp(message);
    clearCart();
    
    // Show success message or redirect
    alert('تم إرسال الطلب بنجاح! ستتم إعادة توجيهك إلى واتساب.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 space-x-reverse text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowRight className="h-5 w-5" />
            <span>العودة للمتجر</span>
          </button>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-2 space-x-reverse mb-6">
                <ShoppingBag className="h-6 w-6 text-yellow-600" />
                <h2 className="text-xl font-bold text-gray-900">ملخص الطلب</h2>
              </div>

              <div className="space-y-4 mb-6">
                {cart.items.map(item => (
                  <div key={item.product.id} className="flex items-center space-x-4 space-x-reverse p-4 bg-gray-50 rounded-xl">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.product.name}</h3>
                      <p className="text-sm text-gray-600">الكمية: {item.quantity}</p>
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-gray-900">{item.product.price * item.quantity} جنيه</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">الإجمالي:</span>
                  <span className="text-2xl font-bold text-yellow-600">{cart.total} جنيه</span>
                </div>
              </div>
            </div>

            {/* Customer Information Form */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">بيانات العميل</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="h-4 w-4 inline ml-1" />
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    value={customer.fullName}
                    onChange={(e) => setCustomer(prev => ({ ...prev, fullName: e.target.value }))}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                      errors.fullName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="أدخل اسمك الكامل"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="h-4 w-4 inline ml-1" />
                    رقم الهاتف *
                  </label>
                  <input
                    type="tel"
                    value={customer.phoneNumber}
                    onChange={(e) => setCustomer(prev => ({ ...prev, phoneNumber: e.target.value }))}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                      errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="01234567890"
                    dir="ltr"
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
                  )}
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MessageSquare className="h-4 w-4 inline ml-1" />
                    ملاحظات إضافية
                  </label>
                  <textarea
                    value={customer.notes}
                    onChange={(e) => setCustomer(prev => ({ ...prev, notes: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="أي ملاحظات خاصة بالطلب..."
                    rows={3}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-amber-500 hover:to-orange-500 text-white py-4 px-6 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  إتمام الطلب عبر واتساب
                </button>
              </form>

              <p className="text-sm text-gray-500 text-center mt-4">
                سيتم إرسال طلبك عبر واتساب للمتجر لتأكيد التفاصيل والتوصيل
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};