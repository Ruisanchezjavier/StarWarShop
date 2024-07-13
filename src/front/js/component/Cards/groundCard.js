import React from 'react';
import '../../../styles/groundCard.css'; 

export const GroundCard = ({ card }) => {
  return ( 
    <div className="ground-card">
      <img src={card.image} alt={card.name} />
      <h2>{card.name}</h2>
      <p>Rating: {card.rating}</p>
      <p>Side: {card.side}</p>
      <p>Type: {card.type}</p>
      <p>Points: {card.points}</p>
      <p>Price: ${card.price}</p>
    </div>
  );
};


