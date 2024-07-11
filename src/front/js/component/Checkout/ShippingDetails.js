import React, { useState } from 'react';

export const ShippingDetails = ({ setShippingInfo }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setShippingInfo({ name, address, city, postalCode });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Shipping Details</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
      </div>
      <div>
        <label>City:</label>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
      </div>
      <div>
        <label>Postal Code:</label>
        <input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required />
      </div>
      <button type="submit">Save Shipping Details</button>
    </form>
  );
};


