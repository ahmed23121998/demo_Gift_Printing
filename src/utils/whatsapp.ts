import { Cart, Customer } from '../types';

export const generateWhatsAppMessage = (cart: Cart, customer: Customer): string => {
  let message = `طلب جديد من متجر Gift Printing 🎁\n`;
  message += `--------------------------------\n\n`;

  cart.items.forEach(item => {
    message += `المنتج: ${item.product.name}\n`;
    message += `الكمية: ${item.quantity}\n`;
    message += `السعر: ${item.product.price * item.quantity} جنيه\n\n`;
  });

  message += `الإجمالي: ${cart.total} جنيه\n\n`;
  message += `اسم العميل: ${customer.fullName}\n`;
  message += `رقم الهاتف: ${customer.phoneNumber}\n`;
  if (customer.notes) {
    message += `ملاحظات: ${customer.notes}\n`;
  }

  return encodeURIComponent(message);
};

export const sendToWhatsApp = (message: string, phoneNumber: string = "201274755272") => {
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, '_blank');
};