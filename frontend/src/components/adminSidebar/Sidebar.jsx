import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo_only.png";
import logoText from "../../assets/icons/logo-text.png";

function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen items-center flex justify-center">
      <h1 className="text-2xl font-bold p-4 text-center">
           <div className="flex flex-col items-center ">
                <img className="h-[3.5vw] pt-[0.5vw]" src={logo} alt="Logo" />
                <img className="h-[3vw] w-auto" src={logoText} alt="Logo Text" />
              </div>
      </h1>
    </div>
  );
}

export default Sidebar;
