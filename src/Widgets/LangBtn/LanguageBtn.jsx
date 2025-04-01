import React, { useContext } from "react";
import {
  LanguageContext,
  ThemeContext,
  THEMES,
  LANGUAGES,
} from "../../Context/context";
import styles from "./LanguageBtn.module.css";

export default function LanguageBtn() {
  const { language, setLanguage } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  const toggleLanguage = () => {
    setLanguage(language === LANGUAGES.EN ? LANGUAGES.RU : LANGUAGES.EN);
  };

  return (
    <div>
      <button
        type="button"
        className={`${styles.lang} ${
          theme === THEMES.LIGHT ? styles.light : styles.dark
        }`}
        onClick={toggleLanguage}
      >
        {language === LANGUAGES.EN ? LANGUAGES.EN : LANGUAGES.RU}
      </button>
    </div>
  );
}
