import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ConfirmationPage.css';

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { booking } = location.state || {};

  if (!booking) {
    return <p>No booking information available.</p>;
  }

  return (
    <div className="confirmation-page">
      <h2>Booking Confirmation</h2>
      <p>Thank you for your booking! Here are the details:</p>
      <ul>
        <li><strong>Service:</strong> {booking.serviceName}</li>
        <li><strong>Name:</strong> {booking.name}</li>
        <li><strong>Email:</strong> {booking.email}</li>
        <li><strong>Phone:</strong> {booking.phone}</li>
        <li><strong>Car Model:</strong> {booking.carModel}</li>
        <li><strong>Plate Number:</strong> {booking.plateNumber}</li>
        <li><strong>Preferred Time:</strong> {booking.preferredTime}</li>
      </ul>
      <button onClick={() => navigate('/')} className="back-home-btn">Back to Home</button>
    </div>
  );
};

export default ConfirmationPage;
