import React from 'react';
import { GroundCard } from '../Cards/groundCard';

export const GroundCardList = ({ gCards }) => {
  return (
    <div className="pcard-list">
      {gCards && gCards.map((pcard) => (
        <GroundCard key={pcard.id} pcard={pcard} />
      ))}
    </div>
  );
};




