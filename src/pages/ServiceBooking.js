import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import TestimonialsCarousel from '../component/TestimonialsCarousel';

function ServiceBooking() {
  const { token } = useContext(AuthContext);
  const [form, setForm] = useState({ vehicleType: '', serviceDate: '', address: '', contact: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/services', { ...form, userId: token })
      .then(() => alert('Service Booked'));
  };
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
    <div style={{ padding: '40px 20px' }}>
      {/* Our Services Section */}

      {/* Booking Form Section */}
      <section style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
        {/* Left Side Banner */}
        <div style={{ flex: '1 1 300px' }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvVWNwGXtwbkzjDYBD93VEc4ASCCNbWTDkHA&s" alt="Service Banner" style={{ width: '100%', borderRadius: '8px' }} />
        </div>

        {/* Right Side Form */}
        <div style={{ flex: '1 1 300px', background: '#f9f9f9', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#b30000', marginBottom: '20px' }}>Book a Service</h3>
          <form onSubmit={handleSubmit}>
            <input name='vehicleType' placeholder='Vehicle Type' onChange={(e) => setForm({ ...form, vehicleType: e.target.value })} style={inputStyle} />
            <input name='serviceDate' type='date' placeholder='Date' onChange={(e) => setForm({ ...form, serviceDate: e.target.value })} style={inputStyle} />
            <input name='address' placeholder='Address' onChange={(e) => setForm({ ...form, address: e.target.value })} style={inputStyle} />
            <input name='contact' placeholder='Contact' onChange={(e) => setForm({ ...form, contact: e.target.value })} style={inputStyle} />
            <button type='submit' style={{ backgroundColor: '#b30000', color: '#fff', border: 'none', padding: '10px 20px', cursor: 'pointer', marginTop: '10px' }}>Book Service</button>
          </form>
        </div>
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
    <TestimonialsCarousel/>

    </div>
  );
}

const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
  borderRadius: '5px',
  border: '1px solid #ccc'
};

export default ServiceBooking;