// src/pages/AboutUs/AboutUs.jsx
import React from "react";
import "./AboutUs.css"; // Create this file for styling

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <div className="about-us-container">
        <h1>About Us</h1>
        <div className="about-us-content">
          <div className="about-us-section">
            <img
              src="/assets/hero2.jpeg" // Add an appropriate image to the assets folder
              alt="Our Team"
              className="about-us-image"
            />
          </div>
          <div className="about-us-section">
            <p>
              Welcome to <strong>Car Wash App</strong>, your ultimate destination for
              top-notch car care services. At Car Wash App, we believe in providing
              unparalleled service quality, ensuring your vehicle shines as bright as your smile.
            </p>
            <p>
              Our journey began with a simple mission: to revolutionize the way
              car washes are booked and managed. Today, we’re proud to serve our
              customers with cutting-edge technology, professional services, and
              a passionate team committed to excellence.
            </p>
            <p>
              Whether you're a car owner looking for a quick wash or a business
              owner managing multiple car services, we have tailored solutions
              for you. Join us in redefining convenience and quality in car care.
            </p>
          </div>
        </div>
        <div className="about-us-team">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="/assets/patrick.jpeg" alt="Team Member 1" />
              <p>John Doe</p>
              <span>Founder & CEO</span>
            </div>
            <div className="team-member">
              <img src="/assets/jane.jpeg" alt="Team Member 2" />
              <p>Jane Smith</p>
              <span>Operations Manager</span>
            </div>
            <div className="team-member">
              <img src="/assets/guillaume.jpeg" alt="Team Member 3" />
              <p>Mike Johnson</p>
              <span>Marketing Lead</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
