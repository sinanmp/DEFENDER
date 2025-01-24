import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/icons/logo_only.png";
import logoText from "../../assets/icons/logo-text.png";

function Header({activeNav,setActiveNav}) {
  

  return (
    <header className="flex justify-between items-center px-[6vw] h-auto">
      <div className="flex flex-col items-center ">
        <img className="h-[2.5vw] pt-[0.5vw]" src={logo} alt="Logo" />
        <img className="h-[3vw] w-auto" src={logoText} alt="Logo Text" />
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
          className={`nav-link ${activeNav === "#products" || activeNav === "#allProducts"? "active" : ""}`}
          onClick={() => setActiveNav("#products")}
        >
          Products
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
    