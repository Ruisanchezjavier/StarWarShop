import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Payment = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardError, setCardError] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [expiryError, setExpiryError] = useState('');
    const [cvv, setCvv] = useState('');
    const [cvvError, setCvvError] = useState('');
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

    //2h-card number
    //more coffe
    const formatCardNumber = (value) => {
        value = value.replace(/\D/g, '').slice(0, 16);
        return value.replace(/(.{4})/g, '$1 ').trim();
    };

    const handleCardNumberChange = (e) => {
        const formattedValue = formatCardNumber(e.target.value);
        setCardNumber(formattedValue);

        if (formattedValue.replace(/\s/g, '').length === 16) {
            setCardError('');
        } else {
            setCardError('...must be 16 digits');
        }
    };

    // 4h-expiry date 
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
                setExpiryError('Invalid year');
            } else {
                setExpiryError('');
            }
        }
    };
    
    // 6h and enough coffee!!! 
    const handleCvvChange = (e) => {
        const value = e.target.value;
        const formattedCvv = value.replace(/[^0-9]/g, '').slice(0, 4);
        setCvv(formattedCvv);

        if (formattedCvv.length !== 3 && formattedCvv.length !== 4) {
            setCvvError('...must be 3 or 4 digits long');
        } else {
            setCvvError('');
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
                        className={`form-control ${cardError ? 'is-invalid' : ''}`}
                        name="cardNumber"
                        value={cardNumber}
                        pattern="\d{*}"
                        onChange={handleCardNumberChange}
                        placeholder="0000 0000 0000 0000"
                        maxLength="19"
                        required
                    />
                    {cardError && <div className="invalid-feedback">{cardError}</div>}
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


