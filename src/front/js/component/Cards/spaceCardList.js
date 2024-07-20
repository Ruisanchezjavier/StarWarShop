import React, {useContext, useEffect, useState } from 'react';
import{Context}from"../../store/appContext"
import { SpaceCard } from '../Cards/spaceCard';

export const SpaceCardList = ({  showDetails }) => {
  const {store,actions}=useContext(Context)
  return (
    <div className="pcard-list">
      {store.cards.filter((item)=>item.type=="Space").map((pcard) => (
        <SpaceCard key={pcard.id} pcard={pcard} showDetails={showDetails} />
      ))}
    </div>
  );
};