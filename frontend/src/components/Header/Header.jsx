import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/icons/logo_only.png";
import logoText from "../../assets/icons/logo-text.png";

function Header({ activeNav, setActiveNav }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (navLink) => {
    setActiveNav(navLink); // Set active navigation
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <header className="fixed lg:static flex justify-between items-center px-[6vw] w-full h-auto z-50">
      <div className="flex flex-col items-center pt-[1.5vw] md:pt-[0.4vw]">
        <img
          className="h-[4vw] lg:h-[2.5vw] lg:pt-[0.5vw]"
          src={logo}
          alt="Logo"
        />
        <img
          className="h-[7vw] lg:h-[3vw] w-auto"
          src={logoText}
          alt="Logo Text"
        />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden">
        <button
          className="hamburger-menu"
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          <span className={`hamburger-bar ${isMenuOpen ? "open" : ""}`} />
          <span className={`hamburger-bar ${isMenuOpen ? "open" : ""}`} />
          <span className={`hamburger-bar ${isMenuOpen ? "open" : ""}`} />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className={`nav  gap-[3vw] ${isMenuOpen ? "open" : ""}`}>
        <a
          href="#home"
          className={`nav-link text-black md:text-white ${activeNav === "#home" ? "active" : ""} `}
          onClick={() => handleNavClick("#home")}
        >
          Home
        </a>
        <a
          href="#products"
          className={`nav-link text-black md:text-white ${
            activeNav === "#products" || activeNav === "#allProducts"
              ? "active"
              : ""
          }`}
          onClick={() => handleNavClick("#products")}
        >
          Products
        </a>
        <a
          href="#contact"
          className={`nav-link text-black md:text-white ${activeNav === "#contact" ? "active" : ""}`}
          onClick={() => handleNavClick("#contact")}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
