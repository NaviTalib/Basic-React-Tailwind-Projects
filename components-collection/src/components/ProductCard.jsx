import React, { useState } from 'react'

const ProductCard = ({ image, name, price, rating }) => {
  const [quantity, setQuantity] = useState(0)

  const handleIncrement = () => setQuantity((prev) => prev + 1)
  const handleDecrement = () => setQuantity((prev) => Math.max(0, prev - 1))

  return (
    <div className="group flex max-w-sm flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-slate-100">
      {/* Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
        <img 
          src={image} 
          alt={name} 
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        {/* Rating Badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-sm">
          <span>{rating}</span>
          <span className="text-amber-400">★</span>
        </div>
      </div>

      {/* Content Body */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <h2 className="line-clamp-2 text-lg font-semibold text-slate-800 transition-colors group-hover:text-blue-600">
            {name}
          </h2>
        </div>

        {/* Price & Quantity Controls */}
        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
          <div>
            <span className="text-xs font-medium text-slate-400">Price</span>
            <p className="text-xl font-bold text-slate-900">₹{price}</p>
          </div>

          {quantity === 0 ? (
            <button 
              onClick={handleIncrement}
              className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 active:scale-95"
            >
              Add to Cart
            </button>
          ) : (
            <div className="flex items-center gap-3 rounded-xl bg-slate-100 p-1">
              <button 
                onClick={handleDecrement}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-slate-700 font-bold shadow-sm transition-colors hover:bg-slate-200 active:scale-95"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="w-5 text-center text-sm font-bold text-slate-800">
                {quantity}
              </span>
              <button 
                onClick={handleIncrement}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold shadow-sm transition-colors hover:bg-blue-700 active:scale-95"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard