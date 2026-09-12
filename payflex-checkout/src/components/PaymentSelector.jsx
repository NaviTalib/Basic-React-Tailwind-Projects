import React from 'react';
import { CreditCard, Wallet, Landmark } from 'lucide-react';

export default function PaymentSelector({ selectedMethod, onSelect }) {
  const methods = [
    { id: 'card', label: 'Card', icon: CreditCard },
    { id: 'paypal', label: 'PayPal', icon: Wallet },
    { id: 'bank', label: 'Bank', icon: Landmark },
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-3">Payment Method</h3>
      <div className="grid grid-cols-3 gap-3">
        {methods.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => onSelect(id)}
            className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-medium transition-all ${
              selectedMethod === id
                ? 'bg-indigo-600/10 border-indigo-500 text-indigo-400'
                : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600'
            }`}
          >
            <Icon className="w-5 h-5 mb-1" />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}