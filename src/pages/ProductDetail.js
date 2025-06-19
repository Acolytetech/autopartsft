import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../context/CartContext';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);


  useEffect(() => {
    axios.get('http://localhost:5000/api/products').then((res) => {
      const found = res.data.find((p) => p._id === id);
      setProduct(found);
    });
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const handleAddToCart = () => {
    addToCart(product);
    alert('Product added to cart');
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} width="200" alt='' />
      <p>{product.description}</p>
      <p>₹{product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;
