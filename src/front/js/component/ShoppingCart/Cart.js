import React, { useContext, useEffect, useState } from 'react';
import { Context } from "../../store/appContext"

export const Cart = () => {
  const { store, actions } = useContext(Context)

  return (
    <div>
      <h2>Cart11</h2>
      {store.cartItems?.map((item, index) => (
        <div key={index}>
          <h4>{item.name}</h4>
          <p>Price: ${item.price}</p>
          <span>Quantity: {item.quantity}</span>
          <button onClick={() => actions.removeFromCart(index)}>Remove</button>
        </div>
      ))}
      {store.cartItems?.length > 0 && (
        <button onClick={actions.clearCart}>Clear Cart</button>
      )}
    </div>
  );
};


