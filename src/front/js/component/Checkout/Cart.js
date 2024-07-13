import React from 'react';

export const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id}>
            <h4>{item.name}</h4>
            <p>{item.price}</p>
          </div>
        ))
      )}
    </div>
  );
};



