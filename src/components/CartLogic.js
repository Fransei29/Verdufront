// src/components/CartLogic.js
import { useState } from 'react';
import axios from 'axios';

const useCart = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    console.log('Producto agregado al carrito:', product); // Depuración
    setCart([...cart, product]);
    setTotalPrice(totalPrice + product.price);
  };

  const handlePurchase = async () => {
    console.log('handlePurchase called');
    const items = cart.map(product => ({
      product_id: product.id,
      quantity: 1 // Asumiendo que cada producto en el carrito es único
    }));

    try {
      const { data } = await axios.post('http://localhost:5000/comprar', {
        items
      });
      console.log(data.message);
      // Puedes limpiar el carrito después de la compra
      setCart([]);
      setTotalPrice(0);
    } catch (error) {
      console.error('Error purchasing products:', error);
    }
  };


  return { cart, totalPrice, addToCart, handlePurchase };
};

export default useCart;
