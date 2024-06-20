// src/components/ProductList.js
import React from 'react';
import Product from "./Product";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className='tienda'>
      <h2>Tienda</h2>
      <ul className='productList'>
        {products.map(product => (
          <li key={product.id}>
             <Product product={product} addToCart={addToCart} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
