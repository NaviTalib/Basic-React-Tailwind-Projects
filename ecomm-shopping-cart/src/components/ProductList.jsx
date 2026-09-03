import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

export default function ProductList() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Controller to cancel fetch request if component unmounts
    const controller = new AbortController();

    async function fetchProducts() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('https://fakestoreapi.com/products?limit=8', {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        
        // Format API products to match our cart structure
        const formattedProducts = data.map((item) => ({
          id: item.id,
          name: item.title,
          price: Math.round(item.price), // optional rounding for clean pricing
          image: item.image,
          category: item.category,
        }));

        setProducts(formattedProducts);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();

    // Cleanup function
    return () => controller.abort();
  }, []);

  // Loading State
  if (loading) {
    return (
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="animate-pulse rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="h-40 w-full rounded-lg bg-gray-200 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
              <div className="h-10 bg-gray-200 rounded w-full"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center text-red-700">
        <p className="font-semibold">Oops! Something went wrong.</p>
        <p className="text-sm mt-1">{error}</p>
      </div>
    );
  }

  // Loaded State
  return (
    <section>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div>
              <div className="h-40 w-full rounded-lg bg-white flex items-center justify-center p-4 mb-4 border border-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full object-contain max-h-32"
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                {product.category}
              </span>
              <h3 className="mt-2 text-sm font-semibold text-gray-800 line-clamp-2">
                {product.name}
              </h3>
              <p className="mt-1 text-xl font-bold text-gray-900">${product.price}</p>
            </div>
            <button
              onClick={() => addToCart(product)}
              className="mt-6 w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500 active:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}