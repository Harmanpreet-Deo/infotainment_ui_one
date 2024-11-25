import React, { useState } from 'react';
import './Settings.css';
import { FaWifi, FaBluetooth, FaDesktop, FaSlidersH, FaCogs, FaVolumeUp, FaMicrophone } from 'react-icons/fa';

const Settings = () => {
  const [selectedButton, setSelectedButton] = useState('Wireless'); // Default selected button is Wireless

  const handleButtonClick = (button) => {
    setSelectedButton(button); // Update the selected button
  };

  return (
    <div className="settings-screen">
      {/* Battery Icon */}
      <div className="battery-icon">
        <span role="img" aria-label="battery">🔋</span>
      </div>

      {/* Left Section */}
      <div className="settings-left">
        {/* Search Bar */}
        <div className="settings-search">
          <input type="text" placeholder="Search" className="search-input" />
          <FaMicrophone className="microphone-icon" />
        </div>

        {/* Settings Options */}
        <div className="settings-options">
          <button
            className={`settings-button ${selectedButton === 'Wireless' ? 'selected' : ''}`}
            onClick={() => handleButtonClick('Wireless')}
          >
            <FaWifi className="settings-icon" />
            Wireless
          </button>
          <button
            className={`settings-button ${selectedButton === 'Bluetooth' ? 'selected' : ''}`}
            onClick={() => handleButtonClick('Bluetooth')}
          >
            <FaBluetooth className="settings-icon" />
            Bluetooth
          </button>
          <button
            className={`settings-button ${selectedButton === 'Display' ? 'selected' : ''}`}
            onClick={() => handleButtonClick('Display')}
          >
            <FaDesktop className="settings-icon" />
            Display
          </button>
          <button
            className={`settings-button ${selectedButton === 'Personalize' ? 'selected' : ''}`}
            onClick={() => handleButtonClick('Personalize')}
          >
            <FaSlidersH className="settings-icon" />
            Personalize
          </button>
          <button
            className={`settings-button ${selectedButton === 'System' ? 'selected' : ''}`}
            onClick={() => handleButtonClick('System')}
          >
            <FaCogs className="settings-icon" />
            System
          </button>
          <button
            className={`settings-button ${selectedButton === 'Sound' ? 'selected' : ''}`}
            onClick={() => handleButtonClick('Sound')}
          >
            <FaVolumeUp className="settings-icon" />
            Sound
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="settings-info">
        Individual Settings or App Information
      </div>
    </div>
  );
};

export default Settings;
