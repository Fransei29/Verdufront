// src/components/Cart.js
import React from 'react';

const Cart = ({ cart, totalPrice, handlePurchase }) => {
  return (
    <div className='tiendab'>
      <h2>Carrito</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <button className='buttonplace' onClick={handlePurchase}>Comprar</button>
    </div>
  );
};

export default Cart;
