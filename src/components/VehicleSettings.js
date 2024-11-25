import React, { useState } from 'react';
import './VehicleSettings.css';
import Seats from '../images/seats.png';
import {
  FaLightbulb,
  FaFan,
  FaChair,
  FaArrowUp,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaThermometerFull,
  FaThermometerEmpty,
  FaSnowflake,
  FaFire,
} from 'react-icons/fa';

const VehicleSettings = ({ setTemperature }) => {
  const [activeControl, setActiveControl] = useState('Lighting'); // Default active control
  const [temperature, setLocalTemperature] = useState(23); // Local temperature state
  const [lightIntensity, setLightIntensity] = useState(50); // Default light intensity
  const [seatHeat, setSeatHeat] = useState(0); // Default seat heating/cooling level (-3 to +3)
  const [isHeatMode, setIsHeatMode] = useState(false); // Toggle for Heat or Cool mode

  // Update both local and shared temperature
  const updateTemperature = (newTemp) => {
    setLocalTemperature(newTemp);
    setTemperature(newTemp); // Update the parent state
  };

  // Function to render right controls based on the active menu
  const renderRightControls = () => {
    switch (activeControl) {
      case 'Lighting':
        return (
          <div className="right-section">
            <div className="vertical-slider-container">
              <FaLightbulb
                className="slider-icon"
                style={{
                  marginBottom: '80px',
                  color: `rgba(255, 204, 0, ${lightIntensity / 100})`, // Glow effect
                  filter: `drop-shadow(0 0 ${lightIntensity / 10}px rgba(255, 204, 0, 1))`,
                }}
              />
              <input
                type="range"
                min="0"
                max="100"
                value={lightIntensity}
                onChange={(e) => setLightIntensity(Number(e.target.value))}
                className="vertical-slider"
                orient="vertical"
              />
              <span className="light-percentage" style={{ marginTop: '80px' }}>
                {lightIntensity}%
              </span>
            </div>
          </div>
        );
      case 'Airflow':
        return (
          <div className="right-section airflow-controls">
            <button
              className={`airflow-toggle-button ${isHeatMode ? 'heat-mode' : 'cool-mode'}`}
              onClick={() => setIsHeatMode(!isHeatMode)}
            >
              {isHeatMode ? <FaFire /> : <FaSnowflake />}
              <span>{isHeatMode ? 'Heat' : 'Cool'}</span>
            </button>
            <div className="fan-buttons">
              <button className="climate-button">
                <FaArrowUp />
              </button>
              <button className="climate-button">
                <FaArrowDown />
              </button>
            </div>
          </div>
        );
      case 'Seating':
        return (
          <div className="right-section seating-controls">
            <div className="seat-adjustment-grid">
              <button className="seat-button">
                <FaArrowUp />
              </button>
              <button className="seat-button">
                <FaArrowDown />
              </button>
              <button className="seat-button">
                <FaArrowLeft />
              </button>
              <button className="seat-button">
                <FaArrowRight />
              </button>
            </div>
            <div className="seat-temperature-controls">
              <button
                className="seat-temp-button"
                onClick={() => setSeatHeat((prev) => Math.max(prev - 1, -3))}
              >
                <FaThermometerEmpty />
              </button>
              <span className="seat-temp-display">
                {seatHeat === 0
                  ? 'Neutral'
                  : seatHeat > 0
                  ? `Heat ${seatHeat}`
                  : `Cool ${-seatHeat}`}
              </span>
              <button
                className="seat-temp-button"
                onClick={() => setSeatHeat((prev) => Math.min(prev + 1, 3))}
              >
                <FaThermometerFull />
              </button>
            </div>
          </div>
        );
      default:
        return (
          <div className="right-section">
            <p>Select a control from the left menu.</p>
          </div>
        );
    }
  };

  return (
    <div className="vehicle-settings">
      {/* Battery Icon */}
      <div className="battery-icon-vehicle">
        <span role="img" aria-label="battery">
          🔋
        </span>
      </div>

      {/* Left Section: Individual Controls */}
      <div className="left-section">
        <div className="controls-list">
          <button
            className={`control-button ${activeControl === 'Lighting' ? 'active' : ''}`}
            onClick={() => setActiveControl('Lighting')}
          >
            <FaLightbulb className="control-icon" />
            Lighting
          </button>
          <button
            className={`control-button ${activeControl === 'Airflow' ? 'active' : ''}`}
            onClick={() => setActiveControl('Airflow')}
          >
            <FaFan className="control-icon" />
            Airflow
          </button>
          <button
            className={`control-button ${activeControl === 'Seating' ? 'active' : ''}`}
            onClick={() => setActiveControl('Seating')}
          >
            <FaChair className="control-icon" />
            Seating
          </button>
        </div>
        <div className="temperature-control">
          <button
            className="temperature-arrow"
            onClick={() => updateTemperature(Math.max(temperature - 1, 16))} // Minimum temperature 16
          >
            <FaArrowDown />
          </button>
          <span className="temperature">{temperature}°C</span>
          <button
            className="temperature-arrow"
            onClick={() => updateTemperature(Math.min(temperature + 1, 30))} // Maximum temperature 30
          >
            <FaArrowUp />
          </button>
        </div>
      </div>

      {/* Center Section: Car View */}
      <div className="center-section">
        <img src={Seats} alt="Car Interior" className="car-view" />
      </div>

      {/* Right Section: Dynamic Controls */}
      {renderRightControls()}
    </div>
  );
};

export default VehicleSettings;
