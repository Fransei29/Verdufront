// src/components/Product.js
const Product = ({ product, addToCart }) => (
    <div className="asi">
      <img className="imgProduct" src={`/img/${product.image}`} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <button className="buttonplace" onClick={() => addToCart(product)}>Agregar al carrito</button>
    </div>
);

export default Product;
