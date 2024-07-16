import React from 'react';

export const Cart = ({ cartItems }) => {
  return (
    <div>
       {cartItems.length === 0 ? (
        <p></p>
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



