import React from 'react';
import { usePreferences } from '../context/PreferenceContext';

export const Header = () => {
  const { language, setLanguage, currency, setCurrency, t } = usePreferences();

  return (
    <header className="card navbar">
      <h1 className="brand-title">{t.title}</h1>
      <div className="auth-box">
        {/* Language Selector */}
        <label>
          <span style={{ fontSize: '0.85rem', marginRight: '0.3rem' }}>{t.changeLang}:</span>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="input"
            style={{ width: 'auto', padding: '0.4rem' }}
          >
            <option value="en">English 🇺🇸</option>
            <option value="es">Español 🇪🇸</option>
            <option value="hi">हिन्दी 🇮🇳</option>
          </select>
        </label>

        {/* Currency Selector */}
        <label style={{ marginLeft: '0.5rem' }}>
          <span style={{ fontSize: '0.85rem', marginRight: '0.3rem' }}>{t.changeCurr}:</span>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="input"
            style={{ width: 'auto', padding: '0.4rem' }}
          >
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="INR">INR (₹)</option>
          </select>
        </label>
      </div>
    </header>
  );
};