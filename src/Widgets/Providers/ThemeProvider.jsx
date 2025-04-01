import React, { useState } from "react";
import { ThemeContext, THEMES } from "../../Context/context";

export default function ThemeProvider({ children }) {
  const getThemeKey = (theme) => {
    return Object.keys(THEMES).find((key) => THEMES[key] === theme);
  };

  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return THEMES[savedTheme];
    }

    return THEMES.LIGHT;
  };

  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = (value) => {
    setTheme(value);

    const themeKey = getThemeKey(value);
    localStorage.setItem("theme", themeKey);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
