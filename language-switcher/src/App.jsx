import React from 'react';
import { PreferenceProvider, usePreferences } from './context/PreferenceContext';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import './index.css';

const MainContent = () => {
  const { t } = usePreferences();

  const sampleProducts = [
    { id: 1, name: 'Wireless Headphones', priceUSD: 99.99 },
    { id: 2, name: 'Mechanical Keyboard', priceUSD: 149.50 },
    { id: 3, name: 'Ergonomic Mouse', priceUSD: 49.00 },
  ];

  return (
    <main className="app-container">
      <Header />
      <section style={{ marginBottom: 'var(--space-md)' }}>
        <h2>{t.welcome}</h2>
      </section>
      <div className="responsive-grid">
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} name={product.name} priceUSD={product.priceUSD} />
        ))}
      </div>
    </main>
  );
};

export default function App() {
  return (
    <PreferenceProvider>
      <MainContent />
    </PreferenceProvider>
  );
}