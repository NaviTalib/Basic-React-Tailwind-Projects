import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ArrowLeft, ShoppingCart } from 'lucide-react';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center py-20 dark:text-white">Loading details...</div>;
  if (!product) return <div className="text-center py-20 dark:text-white">Product not found.</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 dark:text-white">
      <Link to="/products" className="inline-flex items-center text-blue-600 dark:text-blue-400 mb-6 hover:underline">
        <ArrowLeft size={18} className="mr-2" /> Back to Products
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="flex justify-center items-center bg-white p-4 rounded-xl">
          <img src={product.image} alt={product.title} className="h-80 object-contain" />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2.5 py-1 rounded-full font-semibold">
              {product.category}
            </span>
            <h1 className="text-2xl font-bold mt-3 mb-2">{product.title}</h1>
            <p className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 mb-4">${product.price}</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">{product.description}</p>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="flex items-center justify-center space-x-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-colors shadow-md"
          >
            <ShoppingCart size={20} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}