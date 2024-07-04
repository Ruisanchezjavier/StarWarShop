
import React from 'react';
import { ProductCard } from '../component/ProductCard.js';

import ground from '../../img/A New Hope/Category/ground/ANH014_Elite_Stormtrooper_Squad.png';



export const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: 'Admiral Motti',
      description: 'A New Hope',
      price: 14.00,
      imageUrl: ground,
      reviews: [
        { user: 'Alice', comment: 'Great product!', rating: 0 },
        { user: 'Bob', comment: 'Not bad.', rating: 1 }
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