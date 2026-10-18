import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.items);
  
  // Calculate total number of items in cart
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo" onClick={() => navigate('/')}>
          <h2>🌿 Paradise Nursery</h2>
        </div>
        
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Plants</Link>
          <Link to="/cart" className="nav-link cart-link">
            <span className="cart-icon">🛒</span>
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
