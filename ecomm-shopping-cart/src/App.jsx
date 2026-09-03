import React from 'react';
import { CartProvider, useCart } from './context/CartContext';
import ProductList from './components/ProductList';
import CartSummary from './components/CartSummary';

function Navbar() {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-black text-lg">
            S
          </div>
          <h1 className="text-xl font-bold tracking-tight text-gray-900">
            TempStore
          </h1>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3.5 py-1.5 text-xs font-semibold text-gray-700">
          <span>Cart</span>
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-white text-[11px] font-bold">
            {totalItems}
          </span>
        </div>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ProductList />
            </div>
            <div className="lg:col-span-1">
              <CartSummary />
            </div>
          </div>
        </main>
      </div>
    </CartProvider>
  );
}