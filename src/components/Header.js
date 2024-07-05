import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
const Header = ({ handleDarkMode }) => {
  
  return (
    <div className="header">
      <h1>Notes App</h1>
      <div>
        <input type="checkbox" onClick={() => handleDarkMode((previousDarkMode) => !previousDarkMode)} className="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="checkbox-label">
          <FaMoon className="FaMoon" />
          <FaSun className="FaSun" />
          <span className="ball"></span>
        </label>
      </div>
    </div>
  );
};

export default Header;
