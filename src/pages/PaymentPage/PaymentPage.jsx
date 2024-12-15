// src/pages/PaymentPage/PaymentPage.jsx
import React, { useState } from 'react';
import './PaymentPage.css'; // Create and style this file
import axios from 'axios';

const PaymentPage = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
    amount: '',
  });

  const [paymentStatus, setPaymentStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handlePayment = async () => {
    try {
      const response = await axios.post('/api/payment', paymentDetails); // Adjust the endpoint
      setPaymentStatus(response.data.status);
    } catch (error) {
      setPaymentStatus('Payment Failed! Please try again.');
    }
  };

  return (
    <div className="payment-page">
      <div className="payment-container">
        <h2>Make a Payment</h2>
        <div className="input-group">
          <label>Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={handleInputChange}
            placeholder="1234 5678 9012 3456"
          />
        </div>
        <div className="input-group">
          <label>Expiry Date</label>
          <input
            type="text"
            name="expiryDate"
            value={paymentDetails.expiryDate}
            onChange={handleInputChange}
            placeholder="MM/YY"
          />
        </div>
        <div className="input-group">
          <label>CVV</label>
          <input
            type="password"
            name="cvv"
            value={paymentDetails.cvv}
            onChange={handleInputChange}
            placeholder="123"
          />
        </div>
        <div className="input-group">
          <label>Name on Card</label>
          <input
            type="text"
            name="nameOnCard"
            value={paymentDetails.nameOnCard}
            onChange={handleInputChange}
            placeholder="John Doe"
          />
        </div>
        <div className="input-group">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={paymentDetails.amount}
            onChange={handleInputChange}
            placeholder="Enter amount"
          />
        </div>
        <button onClick={handlePayment} className="payment-button">Pay Now</button>
        {paymentStatus && <p className="payment-status">{paymentStatus}</p>}
      </div>
    </div>
  );
};

export default PaymentPage;
