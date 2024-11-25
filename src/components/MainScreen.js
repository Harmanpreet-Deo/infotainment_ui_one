import React, { useState } from 'react';
import BottomNavigationBar from './BottomNavigationBar';
import HomeScreen from './HomeScreen';
import Navigation from './Navigation';
import PhoneSection from './phonesection';
import Settings from './Settings';
import VehicleSettings from './VehicleSettings';
import MusicSection from './MusicSection';
import './styles.css';

const MainScreen = () => {
  const [activeScreen, setActiveScreen] = useState('Home'); // Default screen is Home
  const [temperature, setTemperature] = useState(23); // Shared temperature state
  
  const renderActiveScreen = () => {
    switch (activeScreen) {
      case 'Home':
        return <HomeScreen />;
      case 'Phone':
        return <PhoneSection />;
      case 'Media':
        return <MusicSection />;
      case 'Add':
        return <h1>Add Content Screen</h1>;
      case 'Navigation':
        return <Navigation />;
      case 'Vehicle':
        return <VehicleSettings setTemperature={setTemperature} />; // Pass setTemperature prop to VehicleSettings
      case 'Settings':
        return <Settings />;
      default:
        return <h1>Home Screen</h1>;
    }
  };

  return (
    <div className="main-container">
      {/* Render the active screen */}
      <div className="content-area">{renderActiveScreen()}</div>

      {/* Pass temperature and setActiveScreen to the BottomNavigationBar */}
      <BottomNavigationBar setActiveScreen={setActiveScreen} temperature={temperature} />
    </div>
  );
};

export default MainScreen;
