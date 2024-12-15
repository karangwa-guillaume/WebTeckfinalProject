// src/pages/LoginPage.js
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Use useNavigate for navigation

  // Initial form values
  const initialValues = {
    email: '',
    password: '',
  };

  // Validation Schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6, 'Password should be at least 6 characters').required('Required'),
  });

  // Handle form submission
  const handleSubmit = async (values) => {
    try {
      // API call for login
      const response = await axios.post('/auth/login', values);
      const { token, role } = response.data;

      // Save token and role in localStorage
      localStorage.setItem('authToken', token);
      localStorage.setItem('role', role);

      // Redirect user based on role
      if (role === 'OWNER') {
        navigate('/owner-dashboard'); // Redirect to Car Wash Owner Dashboard
      } else {
        navigate('/customer-dashboard'); // Redirect to Customer Dashboard
      }
    } catch (error) {
      setErrorMessage('Invalid credentials, please try again.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="login-form">
            <div>
              <label>Email</label>
              <Field type="email" name="email" className="input-field" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>
            <div>
              <label>Password</label>
              <Field type="password" name="password" className="input-field" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <button type="submit" className="login-btn">Login</button>
          </Form>
        </Formik>
        <div className="forgot-password">
          <a href="/forgot-password">Forgot Password?</a>
        </div>
        <div className="register-link">
          <p>Don't have an account? <a href="/Register">register here</a></p>
        </div>

      </div>
    </div>
  );
};

export default Login;
