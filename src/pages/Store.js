import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Store() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    axios.get('http://localhost:5000/api/products').then((res) => {
      setProducts(res.data);
      const uniqueCategories = ['All', ...new Set(res.data.map((p) => p.category))];
      setCategories(uniqueCategories);
    });
  }, []);

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div style={{ padding: '40px 20px' }}>
      <h1 style={{ textAlign: 'center', color: '#b30000' }}>Store</h1>

      {/* Category Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', margin: '20px 0' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              margin: '5px',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '20px',
              backgroundColor: activeCategory === cat ? '#b30000' : '#eee',
              color: activeCategory === cat ? '#fff' : '#000',
              cursor: 'pointer'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '20px'
      }}>
        {filteredProducts.map((item) => (
          <div key={item._id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', background: '#fff' }}>
            <img src={item.image} alt={item.name} style={{ width: '100%', height: '150px', objectFit: 'cover', marginBottom: '10px' }} />
            <h4>{item.name}</h4>
            <p style={{ color: '#b30000', fontWeight: 'bold' }}>₹{item.price}</p>
            <p style={{ fontSize: '0.9rem', color: '#555' }}>{item.description?.slice(0, 60)}...</p>
          </div>
        ))}
      </div>

      {/* Reviews Section */}
      <section style={{ padding: '60px 0 0', marginTop: '60px' }}>
        <h2 style={{ textAlign: 'center', color: '#b30000', marginBottom: '30px' }}>What Our Customers Say</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ flex: '1 1 300px', background: '#eee', padding: '20px', borderRadius: '8px' }}>
            <p>"Product quality is top-notch, and service was very responsive."</p>
            <strong>- Arjun M.</strong>
          </div>
          <div style={{ flex: '1 1 300px', background: '#eee', padding: '20px', borderRadius: '8px' }}>
            <p>"Received parts on time and everything was perfect. Highly recommended!"</p>
            <strong>- Sneha D.</strong>
          </div>
          <div style={{ flex: '1 1 300px', background: '#eee', padding: '20px', borderRadius: '8px' }}>
            <p>"Affordable prices and very helpful customer care."</p>
            <strong>- Rahul K.</strong>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Store;
