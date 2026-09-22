import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 text-center dark:text-white">
      <h1 className="text-5xl font-extrabold tracking-tight mb-6">Welcome to NovaStore</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">Discover top-tier tech, fashion, and accessories all in one modern marketplace.</p>
      <Link to="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium text-lg shadow-lg">Browse Catalog</Link>
    </div>
  );
}