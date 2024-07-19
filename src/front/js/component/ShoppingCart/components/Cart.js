import React, { useEffect, useState } from 'react';
import { CartStore } from '../stores/CartStore';
import { removeFromCart, clearCart } from '../actions/CartActions';

export const Cart = () => {
  const [cart, setCart] = useState(CartStore.getCart());

  useEffect(() => {
    const onChange = () => {
      setCart(CartStore.getCart());
    };

    CartStore.addChangeListener(onChange);
    return () => {
      CartStore.removeChangeListener(onChange);
    };
  }, []);

  return (
    <div>
      <h2>Cart11</h2>
      {cart.length === 0 && <p></p>}
      {cart.map((item) => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <p>Price: ${item.price}</p>
          <span>Quantity: {item.quantity}</span>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      {cart.length > 0 && (
        <button onClick={clearCart}>Clear Cart</button>
      )}
    </div>
  );
};


