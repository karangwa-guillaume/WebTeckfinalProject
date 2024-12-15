// src/pages/GenerateReports.js
import React, { useState } from 'react';
import './GenerateReports.css';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

const GenerateReports = () => {
  const [reportType, setReportType] = useState('revenue');

  const handleReportChange = (e) => {
    setReportType(e.target.value);
  };

  // Example data
  const revenueData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Revenue ($)',
        data: [3000, 4000, 3500, 4500, 5000, 6000],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const bookingsData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Bookings',
        data: [50, 65, 55, 70, 80, 95],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const employeePerformanceData = {
    labels: ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve'],
    datasets: [
      {
        label: 'Completed Bookings',
        data: [20, 15, 25, 30, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    const file = new Blob([JSON.stringify({ reportType })], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = `${reportType}_report.txt`;
    link.click();
  };

  return (
    <div className="generate-reports-container">
      <h2>Generate Reports</h2>
      <div className="report-options">
        <label htmlFor="reportType">Select Report:</label>
        <select id="reportType" value={reportType} onChange={handleReportChange}>
          <option value="revenue">Revenue</option>
          <option value="bookings">Bookings</option>
          <option value="employeePerformance">Employee Performance</option>
        </select>
        <button className="download-button" onClick={handleDownload}>
          Download Report
        </button>
      </div>
      <div className="chart-container">
        {reportType === 'revenue' && <Line data={revenueData} />}
        {reportType === 'bookings' && <Bar data={bookingsData} />}
        {reportType === 'employeePerformance' && <Pie data={employeePerformanceData} />}
      </div>
    </div>
  );
};

export default GenerateReports;
