import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);


  return (

    <div>
      <h2>Your Cart</h2>
      {cart.map((item, i) => (
        <div key={i}>
          <h4>{item.name}</h4>
          <p>₹{item.price}</p>
          <button onClick={() => removeFromCart(item._id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
export default Cart;