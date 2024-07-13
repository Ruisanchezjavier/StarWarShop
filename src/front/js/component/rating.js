// Rating.js
import React, { useState } from 'react';

export const Rating = ({ maxRating = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="rating">
      {[...Array(maxRating)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="rstar">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

