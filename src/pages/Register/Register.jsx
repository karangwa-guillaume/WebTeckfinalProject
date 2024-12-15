// src/pages/Register/Register.js
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const initialValues = {
    name: '',
    email: '',
    password: '',
    role: 'CUSTOMER',
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(3, 'Name must be at least 3 characters').required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6, 'Password should be at least 6 characters').required('Required'),
    role: Yup.string().required('Required'),
  });

  const handleSubmit = async (values) => {
    try {
      await axios.post('/auth/register', values);
      navigate('/login');
    } catch (error) {
      setErrorMessage('Error registering user, please try again.');
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h2>Create an Account</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="register-form">
            <div className="form-group">
              <label>Name</label>
              <Field type="text" name="name" className="input-field" />
              <ErrorMessage name="name" component="div" className="error-message" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <Field type="email" name="email" className="input-field" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <Field type="password" name="password" className="input-field" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>
            <div className="form-group">
              <label>Role</label>
              <Field as="select" name="role" className="input-field">
                <option value="CUSTOMER">Customer</option>
                <option value="OWNER">Car Wash Owner</option>
              </Field>
              <ErrorMessage name="role" component="div" className="error-message" />
            </div>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <button type="submit" className="register-btn">Register</button>
          </Form>
        </Formik>
        <div className="login-link">
          <p>Already have an account? <a href="/login">Login here</a></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
