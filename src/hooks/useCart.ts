import { useState, useEffect } from 'react';
import { Cart, CartItem, Product } from '../types';

export const useCart = () => {
  const [cart, setCart] = useState<Cart>({ items: [], total: 0 });

  useEffect(() => {
    const savedCart = localStorage.getItem('giftshop-cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('giftshop-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product, quantity = 1) => {
    
    
    setCart(prevCart => {
      const existingItem = prevCart.items.find(item => item.product.id === product.id);
      
      if (existingItem) {
        const updatedItems = prevCart.items.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        return {
          items: updatedItems,
          total: calculateTotal(updatedItems)
        };
      } else {
        const updatedItems = [...prevCart.items, { product, quantity }];
        return {
          items: updatedItems,
          total: calculateTotal(updatedItems)
        };
      }
    });
    console.log("add", cart);
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => {
      const updatedItems = prevCart.items.filter(item => item.product.id !== productId);
      return {
        items: updatedItems,
        total: calculateTotal(updatedItems)
      };
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart(prevCart => {
      const updatedItems = prevCart.items.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      );
      return {
        items: updatedItems,
        total: calculateTotal(updatedItems)
      };
    });
  };

  const clearCart = () => {
    setCart({ items: [], total: 0 });
  };

  const calculateTotal = (items: CartItem[]) => {
    return items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  const getItemCount = () => {
    return cart.items.reduce((count, item) => count + item.quantity, 0);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getItemCount
  };
};