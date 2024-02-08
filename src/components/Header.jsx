import React from "react";
const Header = ({ handleTheme, theme }) => {
  return (
    <header className="header">
      <div className="header-logo">NotesApp</div>
      <div
        className="header-theme"
        onClick={() => handleTheme((prevTheme) => !prevTheme)}
      >
        {theme === "light" ? "🌜" : "🌞"}
        <span className="theme-text">
          {theme === "light" ? "Dark" : "Light"} Theme
        </span>
      </div>
    </header>
  );
};

export default Header;
