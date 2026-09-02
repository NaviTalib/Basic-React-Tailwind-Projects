import React, { createContext, useContext, useState } from 'react';

// 1. Language Translation Dictionary
const translations = {
  en: {
    title: 'Store Front',
    welcome: 'Welcome to our shop!',
    addToCart: 'Add to Cart',
    changeLang: 'Language',
    changeCurr: 'Currency',
  },
  es: {
    title: 'Tienda',
    welcome: '¡Bienvenido a nuestra tienda!',
    addToCart: 'Añadir al carrito',
    changeLang: 'Idioma',
    changeCurr: 'Moneda',
  },
  hi: {
    title: 'स्टोर फ्रंट',
    welcome: 'हमारी दुकान में आपका स्वागत है!',
    addToCart: 'कार्ट में जोड़ें',
    changeLang: 'भाषा',
    changeCurr: 'मुद्रा',
  },
};

// Currency Exchange Rates (Base USD)
const currencyRates = {
  USD: { symbol: '$', rate: 1 },
  EUR: { symbol: '€', rate: 0.92 },
  INR: { symbol: '₹', rate: 83.5 },
};

// 2. Create Context
const PreferenceContext = createContext();

export const PreferenceProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [currency, setCurrency] = useState('USD');

  // Helper to format price dynamically based on currency
  const formatPrice = (basePriceUSD) => {
    const { symbol, rate } = currencyRates[currency];
    const converted = (basePriceUSD * rate).toFixed(2);
    return `${symbol}${converted}`;
  };

  // Current translation object based on selected language
  const t = translations[language];

  return (
    <PreferenceContext.Provider
      value={{
        language,
        setLanguage,
        currency,
        setCurrency,
        t,
        formatPrice,
      }}
    >
      {children}
    </PreferenceContext.Provider>
  );
};

// Custom Hook
export const usePreferences = () => useContext(PreferenceContext);