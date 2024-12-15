import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Premium Car Wash Services</h1>
        <p>Fast, Reliable, and Affordable. Get your car sparkling clean in no time!</p>
        <div className="hero-buttons">
          <Link to='/login'>
          <button className="btn-primary">Book Now</button>
          </Link>
          <Link to="/Services">
          <button className="btn-secondary">Explore Services</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
