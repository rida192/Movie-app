// BookmarkContext.js
import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "enabled" || false
  );

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Effect hook to update UI and store user preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "disabled");
    }
  }, [darkMode]);

  // Check user preference on initial render
  useEffect(() => {
    const userPreference = localStorage.getItem("darkMode");
    if (userPreference === "enabled") {
      setDarkMode(true);
    }
  }, []);

  const contextValue = {
    darkMode,
    toggleDarkMode,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
