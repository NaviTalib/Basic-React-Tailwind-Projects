import React from 'react';
import { usePreferences } from '../context/PreferenceContext';

export const ProductCard = ({ name, priceUSD }) => {
  const { t, formatPrice } = usePreferences();

  return (
    <div className="card card-hover" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <h3>{name}</h3>
      <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary)' }}>
        {formatPrice(priceUSD)}
      </p>
      <button className="btn btn-primary" style={{ marginTop: 'auto' }}>
        {t.addToCart}
      </button>
    </div>
  );
};