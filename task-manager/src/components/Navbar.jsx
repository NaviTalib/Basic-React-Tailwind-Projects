import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export const Navbar = () => {
  const { user, login, logout } = useAuth();
  const [usernameInput, setUsernameInput] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (usernameInput.trim()) {
      login(usernameInput);
      setUsernameInput('');
    }
  };

  return (
    <header className="card navbar">
      <h1 className="brand-title">TaskFlow</h1>
      <div>
        {user ? (
          <div className="auth-box">
            <span style={{ fontSize: '0.9rem' }}>
              Hi, <strong>{user.username}</strong>
            </span>
            <button className="btn btn-danger" onClick={logout}>
              Logout
            </button>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="auth-box">
            <input
              type="text"
              placeholder="Username"
              className="input"
              style={{ width: '140px' }}
              value={usernameInput}
              onChange={(e) => setUsernameInput(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        )}
      </div>
    </header>
  );
};