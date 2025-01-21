import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/icons/logo_only.png";
import logoText from "../../assets/icons/logo-text.png";

function Header({activeNav,setActiveNav}) {
  

  return (
    <header className="flex justify-between items-center px-[6vw] h-[12vh]">
      <div className="flex items-center gap-3">
        <img className="h-[6vh]" src={logo} alt="Logo" />
        <img className="h-[9vh] w-auto" src={logoText} alt="Logo Text" />
      </div>
      <nav className="nav flex gap-[3vw]">
        <a
          href="#home"
          className={`nav-link ${activeNav === "#home" ? "active" : ""}`}
          onClick={() => setActiveNav("#home")}
        >
          Home
        </a>
        <a
          href="#products"
          className={`nav-link ${activeNav === "#products" ? "active" : ""}`}
          onClick={() => setActiveNav("#products")}
        >
          Products
        </a>
        <a
          href="#about"
          className={`nav-link ${activeNav === "#about" ? "active" : ""}`}
          onClick={() => setActiveNav("#about")}
        >
          About
        </a>
        <a
          href="#contact"
          className={`nav-link ${activeNav === "#contact" ? "active" : ""}`}
          onClick={() => setActiveNav("#contact")}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
    