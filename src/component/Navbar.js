import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#fff', color: '#000', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2>AutoParts</h2>
      <div>
        <Link to="/" style={{ color: '#000', textDecoration:'none', marginRight: '15px' }}>Home</Link>
        <Link to="/store" style={{ color: '#000', textDecoration:'none', marginRight: '15px' }}>Store</Link>
        <Link to="/service" style={{ color: '#000', textDecoration:'none', marginRight: '15px' }}>Service</Link>
        <Link to="/cart" style={{ color: '#000', textDecoration:'none', marginRight: '15px' }}>Cart</Link>
        <Link to="/login" style={{ color: '#000', textDecoration:'none', marginRight: '15px' }}>Login</Link>
        <Link to="/register" style={{ color: '#000', textDecoration:'none', }}>Register</Link>
      </div>
    </nav>
  );
}

export default Navbar; 