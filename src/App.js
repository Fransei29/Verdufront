import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import useCart from "./components/CartLogic";
import axios from "axios";


function App() {
  const [products, setProducts] = useState([]);
  const { cart, totalPrice, addToCart, handlePurchase } = useCart();
  const [purchaseMessage, setPurchaseMessage] = useState("");

  useEffect(() => {
    axios.get("/products.json")
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Error al cargar los productos:", error);
      });
  }, []);

  const onPurchase = () => {
    handlePurchase()
      .then(response => {
        setPurchaseMessage("Compra realizada con éxito");
      })
      .catch(error => {
        setPurchaseMessage(`Error al realizar la compra: ${error.message}`);
      });
  };

  return (
    <div>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} totalPrice={totalPrice} handlePurchase={onPurchase} />
      {purchaseMessage && <p>{purchaseMessage}</p>}
    </div>
  );
}

export default App;
