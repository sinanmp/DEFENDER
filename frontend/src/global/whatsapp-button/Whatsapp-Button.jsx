import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./WhatsappButton.css";

function WhatsAppButton() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMessage((prev) => !prev); // Toggle message visibility
    }, 4000); // Show message every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+9660552278970", "_blank"); // Replace with your WhatsApp number
  };

  return (
    <div>
      <a >
        <div className="whatsapp-button" onClick={handleWhatsAppClick}>
          <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
        </div>
      </a>
      {showMessage && (
        <div className="whatsapp-popup">
          <span className="typing-text">
            Have a question?{" "}
            <span className="font-bold">Contact us on WhatsApp!</span>{" "}
          </span>
        </div>
      )}
    </div>
  );
}

export default WhatsAppButton;
