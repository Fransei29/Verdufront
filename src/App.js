import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import useCart from "./components/CartLogic";

function App() {
  const [products, setProducts] = useState([]);
  const { cart, totalPrice, addToCart, handlePurchase } = useCart();

  useEffect(() => {
    fetch("/products.json")
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error("Error al cargar los productos:", error);
      });
  }, []);

  return (
    <div>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} totalPrice={totalPrice} handlePurchase={handlePurchase} />
    </div>
  );
}

export default App;
