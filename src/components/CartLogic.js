// src/components/CartLogic.js
import { useState } from 'react';
import axios from "axios";

const useCart = () => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);  
    if (existingProductIndex > -1) {
        const updatedCart = [...cart];  
        updatedCart[existingProductIndex].quantity += 1;  // Si el producto ya está en el carrito, actualiza su cantidad
        setCart(updatedCart);
    } else {
        setCart([...cart, { ...product, quantity: 1 }]);  // Si el producto no está en el carrito, agrégalo con cantidad 1
    }

    setTotalPrice(totalPrice + product.price);  // Actualiza el precio total
};

    const handlePurchase = async () => {
    try {
        console.log("Items being purchased:", cart); // Log de los artículos en el carrito
        const response = await axios.post("/comprar", { items: cart });
        console.log("Purchase response:", response.data); // Log de la respuesta del servidor
        setCart([]);
        setTotalPrice(0);
        return response.data;
    } catch (error) {
        console.error("Error purchasing products", error);
        throw error;
    }
    };

    return { cart, totalPrice, addToCart, handlePurchase };
};


export default useCart;
