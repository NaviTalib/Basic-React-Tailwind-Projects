import { NavLink } from 'react-router-dom';
import "./../index.css"; // or "../index.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>MyPortfolio</h2>
      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}