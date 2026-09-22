import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 flex flex-col justify-between hover:shadow-xl transition-shadow group">
      {/* Clicking the image or title goes to product details */}
      <Link to={`/products/${product.id}`} className="block">
        <div className="h-48 flex items-center justify-center bg-white rounded-lg p-2 mb-4 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.title} 
            className="h-full object-contain group-hover:scale-105 transition-transform duration-300" 
          />
        </div>
        <h3 className="font-semibold text-sm line-clamp-2 mb-2 text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {product.title}
        </h3>
      </Link>

      {/* Price and Add-to-Cart Action */}
      <div className="flex items-center justify-between mt-4">
        <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
          ${product.price}
        </span>
        <button
          onClick={(e) => {
            e.preventDefault(); // Prevents triggering the Link navigation
            addToCart(product);
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors flex items-center space-x-1 text-xs font-medium shadow-sm"
          title="Add to Cart"
        >
          <ShoppingCart size={16} />
        </button>
      </div>
    </div>
  );
}