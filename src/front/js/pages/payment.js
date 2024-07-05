import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Payment= () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    amount: '',
  });

  const [paymentStatus, setPaymentStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
//2h
  const [cardNumber, setCardNumber] = useState('');
  const formatCardNumber = (value) => {
    return value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
  };

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); 
    setCardNumber(formatCardNumber(value));
  };
// 4h
  const [expiryDate, setExpiryDate] = useState('');
  const [expiryError, setExpiryError] = useState('');
 


  const handleExpiryChange = (e) => {
    const value = e.target.value;
    const monthYear = value.replace(/[^0-9]/g, '').slice(0, 4);

    let formattedInput = '';
    if (monthYear.length > 2) {
      formattedInput = `${monthYear.slice(0, 2)}/${monthYear.slice(2, 4)}`;
    } else {
      formattedInput = monthYear;
    }
    setExpiryDate(formattedInput);

    if (formattedInput.length === 5) {
      const [month, year] = formattedInput.split('/');
    if (parseInt(month) > 12 || parseInt(month) === 0) {
        setExpiryError('Invalid month');
      } else if (parseInt(`20${year}`) < new Date().getFullYear()) {
        setExpiryError('Year past');
      } else {
        setExpiryError('');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPaymentStatus('Processing...');
    setTimeout(() => {
      setPaymentStatus('Payment successful');
    }, 2000);
  };

  return (
    
    <div className="container mt-5">
      <h2 className="mb-4">Payment method</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        
          <label htmlFor="cardNumber ">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            className="form-control"
            name="cardNumber"
            value={cardNumber}
            pattern="\d{*}"
            onChange={handleCardNumberChange}
            placeholder="0000 0000 0000 0000"
            maxLength="19"
            required           
                      
                      
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date</label>
          <input
            type="text"
            maxLength="5"
            className={`form-control ${expiryError ? 'is-invalid' : ''}`}
            id="expiryDate"
            name="expiryDate"
            value={expiryDate}
            onChange={handleExpiryChange}
            placeholder="MM/YY"
            required    
            />

            {expiryError && <div className="invalid-feedback">{expiryError}</div>}
        
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            className={`form-control ${cvvError ? 'is-invalid' : ''}`}
            id="cvv"
            name="cvv"
            value={cvv}
            onChange={handleCvvChange}
            required
            maxLength="4"
            placeholder="Enter CVV"
            
          />
          {cvvError && <div className="invalid-feedback">{cvvError}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            className="form-control"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Pay</button>
      </form>
      {paymentStatus && <div className="mt-3 alert alert-info">{paymentStatus}</div>}
    </div>
  );
};


