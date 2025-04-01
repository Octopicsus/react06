import React, { useContext } from "react";
import {
  LanguageContext,
  ThemeContext,
  THEMES,
  LANGUAGES,
} from "../../Context/context";
import styles from "./Button.module.css";

export default function Button() {
  const { language } = useContext(LanguageContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
  };

  const buttonText = () => {
    if (theme === THEMES.LIGHT) {
      return language === LANGUAGES.EN
        ? THEMES.LIGHT.titleEn
        : THEMES.LIGHT.titleRu;
    } else {
      return language === LANGUAGES.EN
        ? THEMES.DARK.titleEn
        : THEMES.DARK.titleRu;
    }
  };

  return (
    <div>
      <button
        tupe="button"
        className={
          theme === THEMES.LIGHT ? styles.lightButton : styles.darkButton
        }
        onClick={toggleTheme}
      >
        {buttonText()}
      </button>
    </div>
  );
}
