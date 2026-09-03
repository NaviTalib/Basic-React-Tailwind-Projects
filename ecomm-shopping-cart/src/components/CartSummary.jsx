import React from 'react';
import { useCart } from '../context/CartContext';

export default function CartSummary() {
  const { cart, updateQuantity, removeFromCart, totalItems, totalPrice } = useCart();

  return (
    <aside className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm h-fit sticky top-24">
      <div className="flex items-center justify-between border-b border-gray-200 pb-4">
        <h2 className="text-lg font-bold text-gray-900">Order Summary</h2>
        <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-indigo-600">
          {totalItems} items
        </span>
      </div>

      {cart.length === 0 ? (
        <div className="py-8 text-center">
          <p className="text-sm text-gray-500">Your cart is currently empty.</p>
        </div>
      ) : (
        <div className="mt-4 flex flex-col gap-4">
          <ul className="divide-y divide-gray-100 max-h-80 overflow-y-auto pr-1">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center justify-between py-3">
                <div className="pr-2">
                  <p className="text-sm font-medium text-gray-800">{item.name}</p>
                  <p className="text-xs text-gray-500">${item.price} each</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center rounded-lg border border-gray-200 bg-gray-50">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-2 py-1 text-xs font-bold text-gray-600 hover:text-gray-900"
                    >
                      -
                    </button>
                    <span className="px-2 text-xs font-semibold text-gray-800">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-2 py-1 text-xs font-bold text-gray-600 hover:text-gray-900"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-xs text-red-500 hover:text-red-700 font-medium"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between text-base font-bold text-gray-900">
              <span>Total</span>
              <span>${totalPrice}</span>
            </div>
            <button className="mt-4 w-full rounded-lg bg-gray-900 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 focus:outline-none">
              Checkout
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}