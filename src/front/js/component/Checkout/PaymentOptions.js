import React, { useState } from 'react';

export const PaymentOptions = ({ setPaymentInfo }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setPaymentInfo({ cardNumber, expiryDate, cvv });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Payment Options</h2>
      <div>
        <label>Card Number:</label>
        <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
      </div>
      <div>
        <label>Expiry Date:</label>
        <input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />
      </div>
      <div>
        <label>CVV:</label>
        <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
      </div>
      <button type="submit">Save Payment Info</button>
    </form>
  );
};

