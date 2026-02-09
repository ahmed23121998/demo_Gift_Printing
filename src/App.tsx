import React, { useState } from 'react';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { HeroSection } from './components/Hero/HeroSection';
import { FeaturedProducts } from './components/FeaturedProducts/FeaturedProducts';
import { ProductGrid } from './components/Product/ProductGrid';
import { ProductModal } from './components/Product/ProductModal';
import { CartModal } from './components/Cart/CartModal';
import { CheckoutForm } from './components/Checkout/CheckoutForm';
import { CategoryFilter } from './components/Categories/CategoryFilter';
import { AdminLogin } from './components/Admin/AdminLogin';
import { AdminDashboard } from './components/Admin/AdminDashboard';
import { mockProducts } from './data/mockProducts';
import { Product } from './types';
import './index.css';

type View = 'home' | 'products' | 'checkout' | 'admin-login' | 'admin-dashboard';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('جميع المنتجات');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  // Filter products based on search and category
  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'جميع المنتجات' || product.category === selectedCategory;
    return matchesSearch && matchesCategory && product.active;
  });

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleCloseProductModal = () => {
    setIsProductModalOpen(false);
    setSelectedProduct(null);
  };

  const handleShopNow = () => {
    setCurrentView('products');
    setSearchQuery('');
    setSelectedCategory('جميع المنتجات');
  };

  const handleViewAllProducts = () => {
    setCurrentView('products');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSearchQuery('');
    setSelectedCategory('جميع المنتجات');
  };

  const handleGoToCheckout = () => {
    setCurrentView('checkout');
  };

  const handleBackToProducts = () => {
    setCurrentView('products');
  };

  const handleAdminLogin = () => {
    if (!isAdminAuthenticated) {
      setCurrentView('admin-login');
    } else {
      setCurrentView('admin-dashboard');
    }
  };

  const handleAdminLoginSuccess = () => {
    setIsAdminAuthenticated(true);
    setCurrentView('admin-dashboard');
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
    setCurrentView('home');
  };

  // Admin views
  if (currentView === 'admin-login') {
    return (
      <AdminLogin 
        onLogin={handleAdminLoginSuccess}
        onBack={handleBackToHome}
      />
    );
  }

  if (currentView === 'admin-dashboard') {
    return <AdminDashboard onLogout={handleAdminLogout} />;
  }

  // Checkout view
  if (currentView === 'checkout') {
    return <CheckoutForm onBack={handleBackToProducts} />;
  }

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header
        onSearchChange={setSearchQuery}
        onCartClick={() => setIsCartModalOpen(true)}
        onAdminClick={handleAdminLogin}
      />

      {currentView === 'home' && (
        <>
          <HeroSection onShopNow={handleShopNow} />
          <FeaturedProducts
            onProductSelect={handleProductSelect}
            onViewAll={handleViewAllProducts}
          />
        </>
      )}

      {currentView === 'products' && (
        <main className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                جميع المنتجات
              </h1>
              <p className="text-gray-600">
                اكتشف مجموعتنا الواسعة من الهدايا المطبوعة المخصصة
              </p>
            </div>
            <button
              onClick={handleBackToHome}
              className="text-yellow-600 hover:text-yellow-700 font-semibold transition-colors"
            >
              العودة للرئيسية
            </button>
          </div>

          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <ProductGrid
            products={filteredProducts}
            onQuickView={handleProductSelect}
          />
        </main>
      )}

      <Footer />

      {/* Modals */}
      <ProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={handleCloseProductModal}
      />

      <CartModal
        isOpen={isCartModalOpen}
        onClose={() => setIsCartModalOpen(false)}
        onCheckout={handleGoToCheckout}
      />
    </div>
  );
}

export default App;