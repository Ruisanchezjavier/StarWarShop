import React from 'react';
import { SpaceCard } from '../Cards/spaceCard';

export const SpaceCardList = ({ sCards, showDetails, addToCart }) => {
    
  return (
    <div className="pcard-list">
      {sCards.map((pcard) => (
        <SpaceCard key={pcard.id} pcard={pcard} showDetails={showDetails} addToCart={addToCart}/>
      ))}
    </div>
  );
};