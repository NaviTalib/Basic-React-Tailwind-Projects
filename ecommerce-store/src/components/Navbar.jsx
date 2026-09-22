import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, Sun, Moon } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { totalItems } = useCart();
  const { darkMode, toggleTheme } = useTheme();

  const navLinkClass = ({ isActive }) =>
    `font-medium transition-colors ${
      isActive ? 'text-blue-600 dark:text-blue-400 font-bold' : 'text-gray-600 dark:text-gray-300 hover:text-blue-500'
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          NovaStore
        </Link>

        <div className="flex items-center space-x-6">
          <NavLink to="/" className={navLinkClass} end>Home</NavLink>
          <NavLink to="/products" className={navLinkClass}>Products</NavLink>
          
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link to="/cart" className="relative p-2 text-gray-700 dark:text-gray-200 hover:text-blue-600">
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}