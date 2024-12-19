// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import CustomerDashboard from './pages/Dashboard/CustomerDashboard';
import OwnerDashboard from './pages/Dashboard/OwnerDashboard';
import BookingPage from './pages/Bookings/BookingPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';  // Optional: For handling 404 routes
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ServicesPage from './pages/Services/ServicesPage';
import BookingHistory from './pages/BookingHistory/BookingHistory';
import ManageServices from './pages/ManageServices/ManageServices';
import ManageBookings from './pages/ManageBookings/ManageBookings';
import ManageEmployees from './pages/ManageEmployees/ManageEmployees';
import GenerateReports from './pages/GenerateReports/GenerateReports';
import PaymentPage from './pages/PaymentPage/Paymentpage';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';
import SearchResults from './pages/SearchResults/SearchResults';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <main>
        <Routes>
          <Route path='/'element={<Home/>}/>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/search' element={<SearchResults/>}/>

          {/* Protected routes - Customer Dashboard */}
          <Route path="/customer-dashboard" element={<CustomerDashboard />} />
          <Route path='/Services'element={<ServicesPage/>}/>
          <Route path="/services/:serviceId" element={<ServiceDetails />} />

          {/* Protected routes - Owner Dashboard */}
          <Route path="/owner-dashboard" element={<OwnerDashboard />} />
          <Route path="/manage-services" element={<ManageServices/>}/>
          <Route path="/manage-bookings" element={<ManageBookings />} />
          <Route path="/manage-employees" element={<ManageEmployees/>}/>
          <Route path='/generate-reports' element={<GenerateReports/>}/>
          <Route path='/payment' element={<PaymentPage/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path='/contact-us' element={<ContactUs/>}/>
           
          {/* Other routes */}
          <Route path="/booking" element={<BookingPage />} />
          <Route path='/history' element={<BookingHistory/>}/>
          <Route path='/forgot-password'element={<ForgotPassword/>}/>

          {/* 404 page for undefined routes */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
};

export default App;
