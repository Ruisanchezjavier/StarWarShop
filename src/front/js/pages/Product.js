import React from 'react';

export const Product = () => {
  const product = {
    name: 'Product Name',
    description: 'This is a great product.',
    price: 99.99,
    imageUrl: 'https://via.placeholder.com/150',
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={product.imageUrl} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <h2>${product.price}</h2>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};


