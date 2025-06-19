import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import ServiceBooking from './pages/ServiceBooking';
import AdminDashboard from './pages/AdminDashboard';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Store from './pages/Store';
function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/store' element={<Store/>} />
            <Route path='/product/:id' element={<ProductDetail />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/service' element={<ServiceBooking />} />
            <Route path='/admin' element={<AdminDashboard />} />
          </Routes>
          <Footer/>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}
export default App;
