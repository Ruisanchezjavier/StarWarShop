
import React from 'react';
import { ProductCard } from '../component/ProductCard.js';

export const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is product 1.',
      price: 29.99,
      imageUrl: '',
      reviews: [
        { user: 'Alice', comment: 'Great product!', rating: 3 },
        { user: 'Bob', comment: 'Not bad.', rating: 1 }
      ],
    },

    {
      id: 2,
      name: 'Product 2',
      description: 'This is product 2.',
      price: 29.99,
      imageUrl: '',
      reviews: [
        { user: 'Tom', comment: 'Great product!', rating: 4 },
        { user: 'Mike', comment: 'Not bad.', rating: 1 }
      ],
    },

  
  ];

  return (
    <div className="container">
      <div className="row">
        {products.map(product => (
          <div className="col-md-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

