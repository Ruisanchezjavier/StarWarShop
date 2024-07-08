import React from 'react';

import { StarRating } from '../component/StarRating.js';


export const ProductCard = ({ product }) => {
  return (
    <div className="card text-center mt-2 mb-2">
      <img src={product.imageUrl} alt={product.name} style={{ width: '300px', height: 'auto' }} className="card-img-top mx-auto d-block mt-3 mb-3 rounded" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <h6>${product.price}</h6>
        <button className="btn btn-primary mb-3">Add to Cart</button>
        <div className="reviews">
          <h6>Reviews:</h6>
          {product.reviews.map((review, index) => (
            <div key={index} className="review mb-2">
              <strong>{review.user}:</strong> {review.comment}
              <div>
                <StarRating rating={review.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};