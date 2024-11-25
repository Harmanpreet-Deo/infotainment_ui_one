import React, { useState } from 'react';
import './styles.css';
import Car from '../images/car.png';
import Album from '../images/album.png';
import { FaStepBackward, FaPlay, FaPause, FaStepForward } from 'react-icons/fa';

const HomeScreen = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="home-screen">
      {/* Left Section: Car Status and Music Widget */}
      <div className="home-left-section">
        <div className="car-status">
          <div className="status-row">
            <div className="speed">
              <span>49</span> <small>km/hr</small>
              <div className="gear">
            <span className="gear-active">D</span>
            <span className="gear-inactive">N</span>
            <span className="gear-inactive">R</span>
            <span className="gear-inactive">P</span>
          </div>
            </div>
            <div className="battery">
              <span>384 km</span>
              <span role="img" aria-label="battery">
                🔋
              </span>
            </div>
          </div>

          <div className="car-image">
            <img src={Car} alt="Car" className="car-img" />
          </div>
        </div>

        {/* Music Widget */}
        <div className="music-widget">
          <img src={Album} alt="Album Art" className="album-art" />
          <div className="music-info">
            <div className="scrolling-text">
              <p>Rap God (feat. DXSon)</p>
            </div>
            <div className="controls">
              <button><FaStepBackward /></button>
              <button onClick={togglePlayPause}>
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <button><FaStepForward /></button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Navigation Map */}
      <div className="right-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126915.7727851294!2d-86.87673357240533!3d33.51858958051468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88891a35f29d94d5%3A0x8f4c3ecf9464b9f1!2sBirmingham%2C%20AL!5e0!3m2!1sen!2sus!4v1692293921501!5m2!1sen!2sus"
          className="map-frame"
          loading="lazy"
          title="Navigation Map"
        ></iframe>
      </div>
    </div>
  );
};

export default HomeScreen;
