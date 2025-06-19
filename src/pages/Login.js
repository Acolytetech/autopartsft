// client/src/pages/Login.js
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

function Login() {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/auth/login', form).then((res) => {
      login(res.data.token);
      alert('Login successful!');
    }).catch((err) => {
      alert('Login failed. Check your credentials.');
    });
  };

  return (
    <div style={{ maxWidth: '400px', margin: '60px auto', padding: '30px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#fff' }}>
      <h2 style={{ textAlign: 'center', color: '#b30000' }}>Login to AutoParts</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
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
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
