import React, { useState } from "react";
import { LanguageContext, LANGUAGES } from "../../Context/context";

export default function LanguageProvider({ children }) {
  const getInitialLanguage = () => {
    const savedLanguage = localStorage.getItem("language");
    
    return savedLanguage === LANGUAGES.RU ? LANGUAGES.RU : LANGUAGES.EN;
  };

  const [language, setLanguage] = useState(getInitialLanguage);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);

    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
}