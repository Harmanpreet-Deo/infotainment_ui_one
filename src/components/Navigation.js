import React from 'react';
import './Navigation.css';
import { FaMicrophone, FaArrowRight } from 'react-icons/fa';

const Navigation = () => {
  return (
    <div className="navigation-screen">
      {/* Left Section: Map */}
      <div className="map-container">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126915.7727851294!2d-86.87673357240533!3d33.51858958051468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88891a35f29d94d5%3A0x8f4c3ecf9464b9f1!2sBirmingham%2C%20AL!5e0!3m2!1sen!2sus&output=embed"
            className="map-frame"
            allowFullScreen=""
            loading="lazy"
            title="Navigation Map"
        ></iframe>
      </div>

      {/* Right Section */}
      <div className="info-panel">
        {/* Battery Icon */}
        <div className="battery-section-gps">
          <span role="img" aria-label="battery" className="battery-icon-gps">
            🔋
          </span>
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <FaMicrophone className="microphone-icon" />
        </div>

        {/* Available Routes */}
        <div className="routes-section">
          <h3>Available Routes</h3>
          <button className="route-button">
            <FaArrowRight className="route-icon" /> Through 84 King George
          </button>
          <button className="route-button">
            <FaArrowRight className="route-icon" /> Through 100 Avenue
          </button>
        </div>
        <hr></hr>
        {/* Traffic Updates */}
        <div className="traffic-updates">
          <h3>Traffic Updates</h3>
          <p className="traffic-alert">High Traffic on 88 Avenue</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
