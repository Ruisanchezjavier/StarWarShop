import React from 'react';

export const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} className={i < rating ? 'text-warning' : 'text-muted'}>
        &#9733;
      </span>
    );
  }
  return <div>{stars}</div>;
};