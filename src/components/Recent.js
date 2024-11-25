import React, { useState } from "react";
import "./Recent.css";

const Recent = ({ calls, onCallSelect }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCalls = calls.filter((call) =>
    call.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="recent-section">
      <div className="recent-header">
        Recent Calls
        <input
          type="text"
          className="search-bar"
          placeholder="Search recent calls"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="recent-list">
        {filteredCalls.map((call, index) => (
          <div
            key={index}
            className="recent-item"
            onClick={() => onCallSelect(call)}
          >
            <div className="recent-info">
              <span className="recent-name">{call.name}</span>
            </div>
            <div className="recent-details">
              <span className="recent-time">{call.time}</span>
              <span className="recent-duration">{call.duration} </span>
              <span className="recent-type">{call.type}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recent;
