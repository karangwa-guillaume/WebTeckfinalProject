// src/pages/ManageBookings.js
import React, { useState, useEffect } from 'react';
import './ManageBookings.css';

const ManageBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    // Simulate fetching booking data from an API
    const fetchBookings = async () => {
      const response = [
        { id: 1, customer: 'John Doe', date: '2024-12-10', service: 'Exterior Wash', status: 'Pending', employee: null },
        { id: 2, customer: 'Jane Smith', date: '2024-12-12', service: 'Full Service', status: 'Completed', employee: 'Alice' },
        { id: 3, customer: 'Bob Johnson', date: '2024-12-15', service: 'Interior Cleaning', status: 'Cancelled', employee: null },
      ];
      setBookings(response);
    };

    // Simulate fetching employee data from an API
    const fetchEmployees = async () => {
      const response = ['Alice', 'Bob', 'Charlie']; // Replace with API call
      setEmployees(response);
    };

    fetchBookings();
    fetchEmployees();
  }, []);

  const handleStatusChange = (id, newStatus) => {
    setBookings(
      bookings.map((booking) =>
        booking.id === id ? { ...booking, status: newStatus } : booking
      )
    );
  };

  const handleAssignEmployee = (bookingId, employee) => {
    setBookings(
      bookings.map((booking) =>
        booking.id === bookingId ? { ...booking, employee } : booking
      )
    );
  };

  const filteredBookings =
    filter === 'All'
      ? bookings
      : bookings.filter((booking) => booking.status === filter);

  return (
    <div className="manage-bookings-container">
      <h2>Manage Bookings</h2>
      <div className="filter-container">
        <label htmlFor="status-filter">Filter by Status:</label>
        <select
          id="status-filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>
      <table className="bookings-table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Date</th>
            <th>Service</th>
            <th>Status</th>
            <th>Assigned Employee</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBookings.length > 0 ? (
            filteredBookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.customer}</td>
                <td>{booking.date}</td>
                <td>{booking.service}</td>
                <td className={`status ${booking.status.toLowerCase()}`}>
                  {booking.status}
                </td>
                <td>
                  {booking.employee || (
                    <select
                      onChange={(e) =>
                        handleAssignEmployee(booking.id, e.target.value)
                      }
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Assign Employee
                      </option>
                      {employees.map((employee) => (
                        <option key={employee} value={employee}>
                          {employee}
                        </option>
                      ))}
                    </select>
                  )}
                </td>
                <td>
                  {booking.status === 'Pending' && (
                    <>
                      <button
                        onClick={() => handleStatusChange(booking.id, 'Completed')}
                        className="action-button complete"
                      >
                        Complete
                      </button>
                      <button
                        onClick={() => handleStatusChange(booking.id, 'Cancelled')}
                        className="action-button cancel"
                      >
                        Cancel
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="no-data">
                No bookings found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBookings;
