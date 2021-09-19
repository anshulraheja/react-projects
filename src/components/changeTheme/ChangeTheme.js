import React from "react";
import { useTheme, useThemeUpdate } from "./ChangeThemeContext";

export default function ChangeTheme() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    backgroundColor: darkTheme ? "#FF4C29" : "#334756",
    color: darkTheme ? "#334756" : "#FF4C29",
    width: "50%",
    padding: "1.5rem",
    borderRadius: "20px",
    fontWeight: "900"
  };

  const buttonStyling = {
    padding: "0.8rem 1.8rem",
    border: "4px solid",
    borderRadius: "20px",
    color: "#f5f5f5",
    background: "#333333",
    cursor: "pointer"
  };
  return (
    <div style={{'padding': '1rem'}}> 
      <button onClick={toggleTheme} style={buttonStyling}>
        Toggle Theme
      </button>
      <div style={themeStyles}>Testing useContext Hook</div>
    </div>
  );
}
