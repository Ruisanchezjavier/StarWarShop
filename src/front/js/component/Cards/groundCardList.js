import React, {useContext, useEffect, useState } from 'react';
import{Context}from"../../store/appContext"
import { GroundCard } from '../Cards/groundCard';

export const GroundCardList = ({ showDetails}) => {
  const {store,actions}=useContext(Context)
  return (
    <div className="pcard-list">
      {store.cards.filter((item)=>item.type=="Ground").map((pcard) => (
        <GroundCard key={pcard.id} pcard={pcard} showDetails={showDetails} />
      ))}
    </div>
  );
};