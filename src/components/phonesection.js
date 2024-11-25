import React, { useState } from "react";
import { FaUser, FaThLarge, FaClock, FaVolumeUp, FaBluetooth, FaMicrophone, FaPause, FaPlay } from "react-icons/fa";
import "./phonesection.css";
import Contact from "./Contact";
import Keypad from "./Keypad";
import Recent from "./Recent";

const PhoneSection = () => {
  const [activeMenu, setActiveMenu] = useState("menu1");
  const [selectedContact, setSelectedContact] = useState(null); // State to track selected contact
  const [typedNumber, setTypedNumber] = useState(""); // State to track typed number
  const [isCalling, setIsCalling] = useState(false); // State for call status
  const [isSpeakerOn, setIsSpeakerOn] = useState(false); // State for speaker toggle
  const [isMicMuted, setIsMicMuted] = useState(false); // State for mic mute toggle
  const [isOnHold, setIsOnHold] = useState(false); // State for hold/unhold toggle

  const resetRightSection = () => {
    setSelectedContact(null);
    setTypedNumber("");
    setIsCalling(false);
    setIsSpeakerOn(false);
    setIsMicMuted(false);
    setIsOnHold(false);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    resetRightSection(); // Reset right section on menu click
  };

  const handleContactSelect = (contact) => {
    setSelectedContact(contact); // Set the selected contact for the call screen
    setIsCalling(true); // Automatically start the call
  };

  const handleNumberChange = (number) => {
    setTypedNumber(number); // Update the number displayed in the call screen
  };

  const handleCall = (number) => {
    setIsCalling(true); // Set the calling state
    setTypedNumber(number); // Set the number being called
  };

  const handleEndCall = () => {
    resetRightSection(); // Reset the right section when the call ends
  };

  const renderLeftSection = () => {
    switch (activeMenu) {
      case "menu1":
        return <Contact onContactSelect={handleContactSelect} />;
      case "menu2":
        return (
          <Keypad
            onNumberChange={handleNumberChange}
            onCall={handleCall}
          />
        );
      case "menu3":
        const recentCalls = [
          { name: "John Doe", time: "2h ago", duration: "0s", type: "Missed Call" },
          { name: "Jane Smith", time: "5h ago", duration: "15m", type: "Incoming Call" },
          { name: "Work", time: "Yesterday", duration: "10m", type: "Outgoing Call" },
        ];
        return (
          <Recent
            calls={recentCalls}
            onCallSelect={handleContactSelect} // Same function as contact
          />
        );
      default:
        return <div className="left-content">Left Section for {activeMenu}</div>;
    }
  };

  const renderRightSection = () => {
    if (isCalling) {
      return (
        <div className="call-screen">
          <div className="call-header">
            <h2>Calling {selectedContact?.name || typedNumber}</h2>
            <p>{selectedContact ? "Connected" : "Dialing..."}</p>
          </div>
          <div className="call-body">
            <div className="call-controls">
              {/* Speaker Control */}
              <button
                className={`icon-button ${isSpeakerOn ? "speaker-active" : ""}`}
                onClick={() => setIsSpeakerOn(!isSpeakerOn)}
              >
                <FaVolumeUp />
              </button>

              {/* Bluetooth Control */}
              <button className="icon-button">
                <FaBluetooth />
              </button>

              {/* Microphone Control */}
              <button
                className={`icon-button ${isMicMuted ? "mic-muted" : ""}`}
                onClick={() => setIsMicMuted(!isMicMuted)}
              >
                <FaMicrophone />
              </button>

              {/* Hold/Unhold Control */}
              <button
                className={`icon-button ${isOnHold ? "hold-active" : ""}`}
                onClick={() => setIsOnHold(!isOnHold)}
              >
                {isOnHold ? <FaPlay /> : <FaPause />}
              </button>
            </div>
            <div className="call-actions">
              <button className="action-btn end-call" onClick={handleEndCall}>
                End Call
              </button>
            </div>
          </div>
        </div>
      );
    }

    if (typedNumber) {
      return (
        <div className="dial-display">
          <h2>{typedNumber}</h2>
        </div>
      );
    }

    return <div className="right-content">Select a contact or dial a number.</div>;
  };

  return (
    <div className="phone-section">
      {/* Top Right Corner - Battery Icon */}
      <div className="battery-icon-phone">
        <span role="img" aria-label="battery-phone">
          🔋
        </span>
      </div>

      <div className="phone-left-section">
        <div className="menu-bar">
          <button onClick={() => handleMenuClick("menu1")} className={activeMenu === "menu1" ? "active" : ""}>
            <FaUser />
          </button>
          <button onClick={() => handleMenuClick("menu2")} className={activeMenu === "menu2" ? "active" : ""}>
            <FaThLarge />
          </button>
          <button onClick={() => handleMenuClick("menu3")} className={activeMenu === "menu3" ? "active" : ""}>
            <FaClock />
          </button>
        </div>
        <div className="left-content-container">{renderLeftSection()}</div>
      </div>
      <div className="right-section">{renderRightSection()}</div>
    </div>
  );
};

export default PhoneSection;
