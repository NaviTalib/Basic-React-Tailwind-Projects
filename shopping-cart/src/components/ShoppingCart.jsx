import React, { useState, useMemo } from "react";
import { Plus, Minus, Trash2, ShoppingCart as CartIcon, ShoppingBag } from "lucide-react";

const PRODUCTS = [
  { id: 1, name: "Wireless Headphones", price: 4999, image: "🎧" },
  { id: 2, name: "Smart Watch", price: 9999, image: "⌚" },
  { id: 3, name: "Backpack", price: 2499, image: "🎒" },
  { id: 4, name: "Sunglasses", price: 1499, image: "🕶️" },
  { id: 5, name: "Running Shoes", price: 5999, image: "👟" },
  { id: 6, name: "Coffee Mug", price: 699, image: "☕" },
];

const formatPrice = (n) => `₹${n.toLocaleString("en-IN")}`;

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const changeQuantity = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  const itemCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  const cartQty = (id) => cart.find((item) => item.id === id)?.quantity ?? 0;

  const shipping = subtotal > 0 && subtotal < 5000 ? 99 : 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Shop
          </h1>
          <div className="relative">
            <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm">
              <CartIcon className="w-4 h-4 text-slate-700" />
              <span className="text-sm font-medium text-slate-700">{itemCount}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product list */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {PRODUCTS.map((product) => {
                const qty = cartQty(product.id);
                return (
                  <div
                    key={product.id}
                    className="group relative bg-white rounded-2xl border border-slate-200 p-4 flex flex-col items-center text-center hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-200"
                  >
                    {qty > 0 && (
                      <span className="absolute top-3 right-3 bg-indigo-600 text-white text-[10px] font-semibold w-5 h-5 rounded-full flex items-center justify-center">
                        {qty}
                      </span>
                    )}
                    <div className="w-16 h-16 rounded-xl bg-slate-50 flex items-center justify-center text-3xl mb-3 group-hover:scale-105 transition-transform">
                      {product.image}
                    </div>
                    <p className="font-medium text-slate-900 text-sm leading-snug">
                      {product.name}
                    </p>
                    <p className="text-slate-500 text-sm mb-4 mt-0.5">
                      {formatPrice(product.price)}
                    </p>
                    <button
                      onClick={() => addToCart(product)}
                      className="mt-auto w-full bg-slate-900 text-white text-xs font-medium py-2 rounded-full hover:bg-indigo-600 active:scale-95 transition-all duration-150 flex items-center justify-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Add to cart
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cart */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm h-fit lg:sticky lg:top-8 overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100">
              <h2 className="text-base font-semibold text-slate-900 flex items-center justify-between">
                Your cart
                <span className="text-xs font-normal text-slate-400">
                  {itemCount} item{itemCount !== 1 ? "s" : ""}
                </span>
              </h2>
            </div>

            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-14 px-6 text-center">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-3">
                  <ShoppingBag className="w-5 h-5 text-slate-300" />
                </div>
                <p className="text-slate-400 text-sm">Your cart is empty.</p>
                <p className="text-slate-300 text-xs mt-1">Add something you like.</p>
              </div>
            ) : (
              <div className="px-5 py-4 space-y-4 max-h-[360px] overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-lg bg-slate-50 flex items-center justify-center text-xl shrink-0">
                      {item.image}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-900 truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-slate-400">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 bg-slate-50 rounded-full px-1 py-1">
                      <button
                        onClick={() => changeQuantity(item.id, -1)}
                        className="w-6 h-6 flex items-center justify-center rounded-full bg-white shadow-sm hover:bg-slate-100 transition-colors"
                      >
                        <Minus className="w-3 h-3 text-slate-600" />
                      </button>
                      <span className="w-4 text-center text-xs font-medium text-slate-700">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => changeQuantity(item.id, 1)}
                        className="w-6 h-6 flex items-center justify-center rounded-full bg-white shadow-sm hover:bg-slate-100 transition-colors"
                      >
                        <Plus className="w-3 h-3 text-slate-600" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-slate-300 hover:text-red-500 transition-colors shrink-0"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {cart.length > 0 && (
              <div className="px-5 py-4 border-t border-slate-100 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Subtotal</span>
                  <span className="text-slate-700">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Shipping</span>
                  <span className="text-slate-700">
                    {shipping === 0 ? "Free" : formatPrice(shipping)}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <span className="font-semibold text-slate-900">Total</span>
                  <span className="font-bold text-lg text-slate-900">
                    {formatPrice(total)}
                  </span>
                </div>

                <button className="w-full mt-2 bg-indigo-600 text-white py-2.5 rounded-full text-sm font-medium hover:bg-indigo-700 active:scale-[0.98] transition-all duration-150">
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}