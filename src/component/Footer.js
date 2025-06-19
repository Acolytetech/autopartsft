import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#b30000', color: '#fff', padding: '40px 20px', marginTop: '60px' }}>
      <div style={{ maxWidth: '1000px', margin: 'auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {/* Company Logo and Info */}
        <div style={{ flex: '1 1 250px', marginBottom: '20px' }}>
          <img src="/logo192.png" alt="Logo" style={{ width: '100px', marginBottom: '10px' }} />
          <h3>AutoParts World</h3>
          <p>Quality Car Parts and Doorstep Services</p>
        </div>

        {/* Contact Info */}
        <div style={{ flex: '1 1 250px', marginBottom: '20px' }}>
          <h4>Contact Us</h4>
          <p>Email: support@autoparts.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>123 Auto Street, Delhi, India</p>
        </div>

        {/* Social Links */}
        <div style={{ flex: '1 1 250px', marginBottom: '20px' }}>
          <h4>Follow Us</h4>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.5rem' }}><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.5rem' }}><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.5rem' }}><FaTwitter /></a>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <p>&copy; {new Date().getFullYear()} AutoParts. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
