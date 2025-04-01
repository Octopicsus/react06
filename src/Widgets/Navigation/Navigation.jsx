import React, { useContext } from "react";
import Button from "../Button/Button";
import LanguageBtn from "../LangBtn/LanguageBtn";
import styles from "./Navigation.module.css";
import { ThemeContext, THEMES } from "../../Context/context";

export default function Navigation() {
    const { theme } = useContext(ThemeContext);
  return (
    <header className={theme === THEMES.LIGHT ? styles.light : styles.dark}>
      <Button />
      <LanguageBtn />
    </header>
  );
}
