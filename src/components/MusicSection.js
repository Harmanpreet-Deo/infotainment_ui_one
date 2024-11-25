import React, { useState } from 'react';
import './MusicSection.css';
import {
  FaHome,
  FaSearch,
  FaMicrophone,
  FaSpotify,
  FaApple,
  FaMusic,
  FaPlay,
  FaPause,
  FaStepForward,
  FaStepBackward,
} from 'react-icons/fa';
import AlbumCover from '../images/album.png'; // Replace with your album cover image

const MusicSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50); // Default volume level

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  return (
    <div className="music-section">
      {/* Battery Icon */}
      <div className="battery-icon-music">
        <span role="img" aria-label="battery">
          🔋
        </span>
      </div>

      {/* Left Sidebar */}
      <div className="sidebar">
        <div className="music-search-bar">
          <FaSearch className="icon" />
          <input type="text" placeholder="Search" />
          <FaMicrophone className="icon" />
        </div>
        <div className="menu">
          <button className="menu-item"><FaHome /> Home</button>
          <button className="menu-item"><FaMusic /> Explore</button>
          <button className="menu-item"><FaApple /> Library</button>
        </div>
      </div>

      {/* Playlist View */}
      <div className="playlist-view">
        <div className="playlist-title">Aesthetic Lo-fi</div>
        <ul className="song-list">
          <li className="song-item">Desert Rain - 2:15</li>
          <li className="song-item">Purple Haze - 3:45</li>
          <li className="song-item">Autumn - 4:10</li>
          <li className="song-item">Ocean Breeze - 3:00</li>
        </ul>
      </div>

      {/* Music Player */}
      <div className="player">
        <div className="player-header">
          <FaSpotify className="icon" />
          <FaApple className="icon" />
          <FaMusic className="icon" />
        </div>
        <div className="player-content">
          <img src={AlbumCover} alt="Album Art" className="album-cover" />
          <div className="song-info">
            <div className="song-title">Techzy - Rap God</div>
            <div className="song-artist">(feat. DXSon)</div>
          </div>
        </div>
        <div className="player-controls">
          <button className="music-control-button"><FaStepBackward /></button>
          <button className="music-control-button" onClick={togglePlayPause}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button className="music-control-button"><FaStepForward /></button>
        </div>
        <div className="volume-control">
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
          />
          <div className="volume-text">Volume: {volume}%</div>
        </div>
      </div>
    </div>
  );
};

export default MusicSection;
