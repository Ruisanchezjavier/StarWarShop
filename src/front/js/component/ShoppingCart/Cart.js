import React, { useContext, useEffect, useState } from 'react';
import { Context } from "../../store/appContext"
import "../../../styles/cart.css";
import { StarBackground } from '../../component/StarBackground';

export const Cart = () => {
  const { store, actions } = useContext(Context)

  return (
    <div className="cart-card"> 
          <StarBackground />
      {store.cartItems.map((item, index) => (
           <div key={index} className="cart-item">
          <h4>{item.name}</h4>            
          <img src={item.image} alt={item.name} />
          <div className="cart-item-details">
          <p>Side: {item.side}</p>
          <p>Points: {item.points}</p>             
          <p>Price: ${item.price}</p>
          <div className="btn-card d-grid">
          <button className="btn btn-secondary" onClick={() => actions.removeFromCart(index)}>Remove</button>
        
        </div>
        </div>
        </div>
      ))}
  
      {store.cartItems.length > 0 && (
        <button onClick={actions.clearCart}>Clear Cart</button>
      )}
    </div>
   
  );
};


