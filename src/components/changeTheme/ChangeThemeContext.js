import React, { useContext, useState } from "react";

//creating context object and passing defualt value
const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

//creating custom hooks to able to use ThemeProvider func in ChangeTheme.js
export function useTheme() {
  return useContext(ThemeContext);
}
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevTheme) => !prevTheme);
  }
  return (
    //using state to dynamically pass values to the context
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
