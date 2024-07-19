import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { ProductList } from '../component/Checkout/ProductList';
import { Cart } from '../component/Checkout/Cart';
import { ShippingDetails} from '../component/Checkout/ShippingDetails';
import { PaymentOptions } from '../component/Checkout/PaymentOptions';

export const Checkout_process = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [profile, setProfile] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [shippingInfo, setShippingInfo] = useState(null);
  const [paymentInfo, setPaymentInfo] = useState(null);

  const products = [
    { id: 1, name: 'Product 1', price: '$10' },
    { id: 2, name: 'Product 2', price: '$20' },
    { id: 3, name: 'Product 3', price: '$30' }
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  useEffect(() => {
    let authenticate = async () => {
      let result = await actions.authenticate();
      if (result) {
        setProfile(store.userProfile);
      }else{navigate("/signin")}
    };
    authenticate();
  }, []);

  return (
    <div>
      <h1>Shopping Cart with Shipping and Payment</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cartItems} />
      <ShippingDetails setShippingInfo={setShippingInfo} />
      <PaymentOptions setPaymentInfo={setPaymentInfo} />
      {shippingInfo && paymentInfo && (
        <div>
          <h2>Order Summary</h2>
          <p>Shipping Info: {JSON.stringify(shippingInfo)}</p>
          <p>Payment Info: {JSON.stringify(paymentInfo)}</p>
        </div>
      )}
    </div>
  );
};


