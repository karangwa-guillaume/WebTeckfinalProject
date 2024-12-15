// src/pages/BookingHistory.js
import React, { useState, useEffect } from 'react';
import './BookingHistory.css';

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBookings, setFilteredBookings] = useState([]);

  useEffect(() => {
    // Simulate fetching booking data from an API
    const fetchBookings = async () => {
      const response = [
        { id: 1, date: '2024-12-01', service: 'Exterior Wash', price: 20, status: 'Completed' },
        { id: 2, date: '2024-12-05', service: 'Full Service', price: 50, status: 'Pending' },
        { id: 3, date: '2024-12-10', service: 'Interior Cleaning', price: 30, status: 'Completed' },
        { id: 4, date: '2024-12-10', service: 'waxing', price: 60, status: 'Completed' },
        { id: 4, date: '2024-12-10', service: 'Home service', price: 100, status: 'Completed' },
      ];
      setBookings(response);
      setFilteredBookings(response);
    };

    fetchBookings();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    const filtered = bookings.filter((booking) =>
      booking.service.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredBookings(filtered);
  };

  return (
    <div className="history-container">
      <h2>Booking History</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by service..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <table className="history-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Service</th>
            <th>Price ($)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredBookings.length > 0 ? (
            filteredBookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.date}</td>
                <td>{booking.service}</td>
                <td>{booking.price}</td>
                <td className={booking.status === 'Completed' ? 'completed' : 'pending'}>
                  {booking.status}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="no-data">
                No bookings found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookingHistory;
