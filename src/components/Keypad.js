import React from "react";
import { FaPhone, FaBackspace } from "react-icons/fa";
import "./Keypad.css";

const Keypad = ({ onNumberChange, onCall }) => {
  const [typedNumber, setTypedNumber] = React.useState("");

  const handleKeyPress = (key) => {
    if (typedNumber.length < 15) {
      const updatedNumber = typedNumber + key;
      setTypedNumber(updatedNumber);
      onNumberChange(updatedNumber);
    }
  };

  const handleDelete = () => {
    const updatedNumber = typedNumber.slice(0, -1);
    setTypedNumber(updatedNumber);
    onNumberChange(updatedNumber);
  };

  const handleCall = () => {
    if (typedNumber.trim()) {
      onCall(typedNumber);
    }
  };

  return (
    <div className="keypad-section">
      <div className="keypad-keys">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"].map((key) => (
          <button key={key} className="keypad-key" onClick={() => handleKeyPress(key)}>
            {key}
          </button>
        ))}
      </div>
      <div className="keypad-actions">
        <button className="action-button backspace-button" onClick={handleDelete}>
          <FaBackspace />
        </button>
        <button className="action-button call-button" onClick={handleCall}>
          <FaPhone />
        </button>
      </div>
    </div>
  );
};

export default Keypad;
