import React, { useState } from 'react';
import './styles.css';
import { FaPhone, FaPlay, FaPlus, FaCompass, FaCar, FaCog, FaHome } from 'react-icons/fa';

const BottomNavigationBar = ({ setActiveScreen, temperature }) => {
  const [activeButton, setActiveButton] = useState('Home'); // Default selected button

  const handleButtonClick = (screen) => {
    setActiveScreen(screen); // Trigger the provided setActiveScreen function
    setActiveButton(screen); // Update the active button
  };

  return (
    <div className="bottom-nav">
      {/* Home Button */}
      <button
        onClick={() => handleButtonClick('Home')}
        className={`nav-icon ${activeButton === 'Home' ? 'active' : ''}`}
      >
        <FaHome />
      </button>

      {/* Other Buttons */}
      <button
        onClick={() => handleButtonClick('Phone')}
        className={`nav-icon ${activeButton === 'Phone' ? 'active' : ''}`}
      >
        <FaPhone />
      </button>
      <button
        onClick={() => handleButtonClick('Media')}
        className={`nav-icon ${activeButton === 'Media' ? 'active' : ''}`}
      >
        <FaPlay />
      </button>
      <button
        onClick={() => handleButtonClick('Add')}
        className={`nav-icon ${activeButton === 'Add' ? 'active' : ''}`}
      >
        <FaPlus />
      </button>
      <button
        onClick={() => handleButtonClick('Navigation')}
        className={`nav-icon ${activeButton === 'Navigation' ? 'active' : ''}`}
      >
        <FaCompass />
      </button>

      {/* Info Section */}
      <div className="nav-info">
        <span>{temperature}°C</span> <span>Cloudy</span>
      </div>

      {/* Vehicle Button */}
      <button
        onClick={() => handleButtonClick('Vehicle')}
        className={`nav-icon ${activeButton === 'Vehicle' ? 'active' : ''}`}
      >
        <FaCar />
      </button>
      <button
        onClick={() => handleButtonClick('Settings')}
        className={`nav-icon ${activeButton === 'Settings' ? 'active' : ''}`}
      >
        <FaCog />
      </button>

      {/* Time Section */}
      <div className="nav-time">4:39 PM</div>
    </div>
  );
};

export default BottomNavigationBar;
