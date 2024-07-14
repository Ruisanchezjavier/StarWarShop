import React from 'react';
import '../../../styles/spaceCard.css'; 

export const SpaceCard = ({ pcard, addToCart, showDetails }) => {
 

  return (    
    <div className="space-card">
      <img src={pcard.image} alt={pcard.name} />
      <h2>{pcard.name}</h2>
      <p>Rating: {pcard.rating}</p>
      <p>Side: {pcard.side}</p>
      <p>Type: {pcard.type}</p>
      <p>Points: {pcard.points}</p>
      <p>Price: ${pcard.price}</p>
    
    <div className="btn-card d-grid">
    <button className="btn btn-secondary" onClick={() => showDetails(pcard)}>Card Details</button>
    
    
    
    </div>
     
    
    </div>
    
    
    
  );
};


