// client/src/pages/AdminDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [tab, setTab] = useState('products');
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);
  const [orders, setOrders] = useState([]);
  const [form, setForm] = useState({ name: '', description: '', price: '', image: '', category: '', brand: '', stock: '' });
  const [serviceForm, setServiceForm] = useState({ vehicleType: '', serviceDate: '', address: '', contact: '' });

  useEffect(() => {
    if (tab === 'products') {
      axios.get('http://localhost:5000/api/products').then((res) => setProducts(res.data));
    } else if (tab === 'services') {
      axios.get('http://localhost:5000/api/services/admin').then((res) => setServices(res.data));
    } else if (tab === 'orders') {
      axios.get('http://localhost:5000/api/orders').then((res) => setOrders(res.data));
    }
  }, [tab]);

  const handleProductChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/products', form).then(() => {
      alert('Product added');
      window.location.reload();
    });
  };

  const handleServiceChange = (e) => {
    setServiceForm({ ...serviceForm, [e.target.name]: e.target.value });
  };

  const handleServiceSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/services', serviceForm).then(() => {
      alert('Service added');
      window.location.reload();
    });
  };

  return (
    <div style={{ backgroundColor: '#fff', color: '#b30000', padding: '20px', fontFamily: 'sans-serif' }}>
      <h2 style={{ color: '#b30000', textAlign: 'center' }}>Admin Dashboard</h2>
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <button style={{ backgroundColor: '#b30000', color: 'white', padding: '10px', marginRight: '10px' }} onClick={() => setTab('products')}>Manage Products</button>
        <button style={{ backgroundColor: '#b30000', color: 'white', padding: '10px', marginRight: '10px' }} onClick={() => setTab('services')}>Manage Services</button>
        <button style={{ backgroundColor: '#b30000', color: 'white', padding: '10px' }} onClick={() => setTab('orders')}>View Orders</button>
      </div>

      {tab === 'products' && (
        <div>
          <h3>Add Product</h3>
          <form onSubmit={handleProductSubmit} style={{ marginBottom: '20px' }}>
            <input name='name' placeholder='Name' onChange={handleProductChange} /><br />
            <textarea name='description' placeholder='Description' onChange={handleProductChange}></textarea><br />
            <input name='price' placeholder='Price' onChange={handleProductChange} /><br />
            <input name='image' placeholder='Image URL' onChange={handleProductChange} /><br />
            <input name='category' placeholder='Category' onChange={handleProductChange} /><br />
            <input name='brand' placeholder='Brand' onChange={handleProductChange} /><br />
            <input name='stock' placeholder='Stock' onChange={handleProductChange} /><br />
            <button type='submit' style={{ backgroundColor: '#b30000', color: 'white', padding: '10px', marginTop: '10px' }}>Add Product</button>
          </form>
          <h3>Existing Products</h3>
          <div style={{display:'flex',flex:'wrap', gap:'20px',padding:'20px', backgroundColor: '#b30000'}}>

          {products.map((p) => (
            <div key={p._id} style={{ width:'30%',  display: 'flex', alignItems: 'center', backgroundColor: '#f9f9f9', padding: '10px' }}>
              <img src={p.image} width="100" alt='' style={{ marginRight: '15px' }} />
              <div>
                <strong>{p.name}</strong> - ₹{p.price}<br />
                <small>{p.category} | {p.brand}</small>
              </div>
            </div>
          ))}
          </div>
        </div>
      )}

      {tab === 'services' && (
        <div>
          <h3>Add Service</h3>
          <form onSubmit={handleServiceSubmit} style={{ marginBottom: '20px' }}>
            <input name='vehicleType' placeholder='Vehicle Type' onChange={handleServiceChange} /><br />
            <input name='serviceDate' placeholder='Service Date' onChange={handleServiceChange} /><br />
            <input name='address' placeholder='Address' onChange={handleServiceChange} /><br />
            <input name='contact' placeholder='Contact' onChange={handleServiceChange} /><br />
            <button type='submit' style={{ backgroundColor: '#b30000', color: 'white', padding: '10px', marginTop: '10px' }}>Add Service</button>
          </form>
          <h3>Booked Services</h3>
          <div style={{display:'flex', backgroundColor: '#b30000'}}>

          {services.map((s, i) => (
              <div key={i} style={{ marginBottom: '10px', backgroundColor: '#f9f9f9', padding: '10px' }}>
              <p><strong>Vehicle:</strong> {s.vehicleType}</p>
              <p><strong>Date:</strong> {s.serviceDate}</p>
              <p><strong>Contact:</strong> {s.contact}</p>
            </div>
          ))}
          </div>
        </div>
      )}

      {tab === 'orders' && (
        <div>
          <h3>Customer Orders</h3>
          {orders.length === 0 ? (
            <p>No orders found.</p>
          ) : (
            orders.map((order, i) => (
              <div key={i} style={{ border: '1px solid #b30000', marginBottom: '10px', padding: '10px', backgroundColor: '#fff0f0' }}>
                <p><strong>Name:</strong> {order.name}</p>
                <p><strong>Address:</strong> {order.address}</p>
                <p><strong>Contact:</strong> {order.contact}</p>
                <p><strong>Items:</strong></p>
                <ul>
                  {order.items.map((item, index) => (
                    <li key={index}>{item.name} - ₹{item.price}</li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;