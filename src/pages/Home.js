// client/src/pages/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TestimonialsCarousel from '../component/TestimonialsCarousel';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products').then(res => setProducts(res.data));
  }, []);
const services = [
  {
    name: 'Doorstep Car Repair & Service',
    price: '₹499',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo9lKRG8Rl91FyB7NLf_k55Uh_QHzCVe3jfw&s'
  },
  {
    name: 'Car Wash & Detailing',
    price: '₹299',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbrp4-N-W7ZV1fYnxCjIiCVKe__c8xptw1Hw&s'
  },
  {
    name: 'AC & Battery Services',
    price: '₹599',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLF1WWSuzV9bWQaIKK1ChaIYr0OLCEkz1vHg&s        '
  },
  {
    name: 'Pickup & Drop',
    price: '₹199',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuOE2F8TEThdCcL-Umu33cU7hkguB6fE3MRQ&s'
  },  {
    name: 'AC & Battery Services',
    price: '₹599',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLF1WWSuzV9bWQaIKK1ChaIYr0OLCEkz1vHg&s        '
  },  {
    name: 'AC & Battery Services',
    price: '₹599',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLF1WWSuzV9bWQaIKK1ChaIYr0OLCEkz1vHg&s        '
  }
];
  return (
    <div style={{ backgroundColor: '#fff', color: '#b30000', fontFamily: 'sans-serif' }}>

      {/* Hero Section */}
      <section style={{ background: '#b30000', color: '#fff', padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Welcome to AutoParts World</h1>
        <p style={{ fontSize: '1.2rem' }}>Best deals on auto parts & doorstep service bookings!</p>
        <Link to="/service">
          <button style={{ marginTop: '20px', padding: '10px 20px', fontSize: '1rem', backgroundColor: '#fff', color: '#b30000', border: 'none', cursor: 'pointer' }}>Book Service Now</button>
        </Link>
      </section>

      {/* Services Section */}
    <section style={{ padding: '40px 20px', background: '#fff' }}>
      <h2 style={{ color: '#b30000', textAlign: 'center', marginBottom: '30px' }}>Our Services</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ddd',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              background: '#fff'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img src={service.image} alt={service.name} style={{ width: '100%', height: '150px', objectFit: 'cover' ,position:'center' }} />
            <div style={{ padding: '15px' }}>
              <h4 style={{ marginBottom: '8px' }}>{service.name}</h4>
              <p style={{ color: '#b30000', fontWeight: 'bold' }}>{service.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

      {/* Products Section */}
      <section style={{ padding: '40px 20px', background: '#f9f9f9' }}>
        <h2 style={{ color: '#b30000' ,textAlign:'center'}}>Hot Selling Auto Parts</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {products.map(item => (
            <div key={item._id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', backgroundColor: '#fff', transition: 'transform 0.3s ease', }}     onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
              <img src={item.image} alt={item.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
              <h4 style={{ color: '#b30000',textTransform:'capitalize' }}>{item.name}</h4>
              <p>₹{item.price}</p>
              <Link to={`/product/${item._id}`}>
                <button style={{ backgroundColor: '#b30000', color: '#fff', border: 'none', padding: '8px 16px', cursor: 'pointer' }}onMouseLeave={e => e.currentTarget.style.background = '#b30000'} onMouseEnter={e => e.currentTarget.style.background = '#000'}>View</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsCarousel/>
    

    
    </div>
  );
}

export default Home;