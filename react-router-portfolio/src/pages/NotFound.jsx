import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for doesn't exist.</p>
      <Link to="/">Go back home</Link>
    </div>
  );
}