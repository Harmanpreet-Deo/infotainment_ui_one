import React, { useState } from "react";
import "./Contact.css";

const Contacts = ({ onContactSelect }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const contacts = [
    { name: "Paimon", avatar: "P" },
    { name: "Amber", avatar: "A" },
    { name: "Jean", avatar: "J" },
    { name: "Lisa", avatar: "L" },
    { name: "Diluc", avatar: "D" },
  ];

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="contacts-section">
      <input
        type="text"
        className="search-bar"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="contact-list">
        {filteredContacts.map((contact, index) => (
          <div
            key={index}
            className="contact-item"
            onClick={() => onContactSelect(contact)} // Trigger callback on contact selection
          >
            <div className="avatar">{contact.avatar}</div>
            <div className="contact-info">
              <div className="contact-name">{contact.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
