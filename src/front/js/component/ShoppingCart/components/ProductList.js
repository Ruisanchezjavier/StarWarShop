import React from 'react';
import { addToCart } from '../actions/CartActions';

export const ProductList = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={pcard.id}>
          <h4>{product.name}</h4>
          <p>Price: ${product.price}</p>
          {/* <button onClick={() => addToCart(pcard)}>Add to Cart</button> */}
        </div>
      ))}
    </div>
  );
};


