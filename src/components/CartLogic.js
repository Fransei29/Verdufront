// src/components/CartLogic.js
import { useState } from 'react';

const useCart = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {

    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingProductIndex > -1) {
        // Si el producto ya está en el carrito, actualiza su cantidad
        const updatedCart = [...cart];
        updatedCart[existingProductIndex].quantity += 1;
        setCart(updatedCart);
    } else {
        // Si el producto no está en el carrito, agrégalo con cantidad 1
        setCart([...cart, { ...product, quantity: 1 }]);
    }

    // Actualiza el precio total
    setTotalPrice(totalPrice + product.price);
};

  const handlePurchase = async () => {

    alert('Comprado!');

    const items = cart.map(product => ({
        product_id: product.id,
        quantity: product.quantity 
    }));

    try {
        const response = await fetch('/comprar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ items }),
        });

        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }

        const data = await response.json();
        alert('Compra realizada exitosamente!');
        console.log(data.message);
        // Limpia el carrito después de la compra
        setCart([]);
        setTotalPrice(0);
    } catch (error) {
        console.error('Error purchasing products:', error);
        alert('Error al realizar la compra. Por favor, inténtalo de nuevo.');
    }
};

  return { cart, totalPrice, addToCart, handlePurchase };
};

export default useCart;
