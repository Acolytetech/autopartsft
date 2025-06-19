// client/src/pages/Register.js
import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/auth/register', form)
      .then(() => alert('User Registered'))
      .catch(() => alert('Registration Failed'));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '60px auto', padding: '30px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#fff' }}>
      <h2 style={{ textAlign: 'center', color: '#b30000' }}>Create an Account</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
          required
        />
        <button
          type="submit"
          style={{ backgroundColor: '#b30000', color: '#fff', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
