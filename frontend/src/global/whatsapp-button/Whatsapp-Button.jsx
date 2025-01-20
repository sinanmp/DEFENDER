import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./WhatsAppButton.css";

function WhatsAppButton() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMessage((prev) => !prev); // Toggle message visibility
    }, 4000); // Show message every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890", "_blank"); // Replace with your WhatsApp number
  };

  return (
    <div>
      <div className="whatsapp-button" onClick={handleWhatsAppClick}>
        <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
      </div>
      {showMessage && (
        <div className="whatsapp-popup">
          <span className="typing-text">Have a question? <span className="font-bold">Contact us on WhatsApp!</span> </span>
        </div>
      )}
    </div>
  );
}

export default WhatsAppButton;
