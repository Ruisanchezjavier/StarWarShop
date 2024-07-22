import React, {useContext, useEffect, useState } from 'react';
import{Context}from"../../store/appContext"
import { BattleCard } from '../Cards/battleCard';

export const BattleCardList = ({ showDetails}) => {
  const {store,actions}=useContext(Context)
  return (
    <div className="pcard-list">
      {store.cards.filter((item)=>item.type=="Battle").map((pcard) => (
        <BattleCard key={pcard.id} pcard={pcard} showDetails={showDetails} />
      ))}
    </div>
  );
};