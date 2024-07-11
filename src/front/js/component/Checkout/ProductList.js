import React from 'react';
import { Product } from '../Checkout/Product';

export const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      {products.map(product => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};



