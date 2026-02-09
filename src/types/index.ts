export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  images?: string[];
  active: boolean;
  featured?: boolean;
  discount?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

export interface Customer {
  fullName: string;
  phoneNumber: string;
  notes?: string;
}

export interface Admin {
  id: number;
  username: string;
  email: string;
}