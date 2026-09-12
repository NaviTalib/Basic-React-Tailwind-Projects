import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function InputField({ label, error, ...props }) {
  return (
    <div>
      {label && <label className="block text-xs font-medium text-slate-300 mb-1">{label}</label>}
      <input
        {...props}
        className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
      />
      {/* Reserved height for error messages to prevent layout jumping */}
      <div className="min-h-[18px] mt-1">
        {error && (
          <p className="text-xs text-rose-400 flex items-center gap-1">
            <AlertCircle className="w-3 h-3 shrink-0" />
            <span>{error}</span>
          </p>
        )}
      </div>
    </div>
  );
}