import React, { useState, useContext } from "react";
import styles from "./LoginForm.module.css";
import {
  AuthContext,
  LanguageContext,
  TRANSLATIONS,
  ThemeContext,
  THEMES,
} from "../../Context/context";

export default function LoginForm() {
  const { setIsAuth } = useContext(AuthContext);
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (login === "admin" && password === "admin") {
      localStorage.setItem("isAuth", "true");

      setIsAuth(true);
    } else {
      console.log("Setting error with language:", language);
      console.log("Error message:", TRANSLATIONS.ERRORMESSAGE[language]);
      setError(TRANSLATIONS.ERRORMESSAGE[language]);
    }
  };

  return (
    <form>
      <div className={styles.inputsWrapper}>
        <input
          className={
            theme === THEMES.LIGHT ? styles.lightInput : styles.darkInput
          }
          type="text"
          placeholder={TRANSLATIONS.LOGINPLACEHOLDER[language]}
          value={login}
          onChange={(event) => {
            setLogin(event.target.value);
          }}
        />

        <input
          className={
            theme === THEMES.LIGHT ? styles.lightInput : styles.darkInput
          }
          type="password"
          placeholder={TRANSLATIONS.PASSWORDPLACEHOLDER[language]}
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        {error && <span className={styles.errorMessage}>{error}</span>}
      </div>

      <button className={styles.signBtn} type="button" onClick={handleLogin}>
        {TRANSLATIONS.SIGNINBUTTON[language]}
      </button>
    </form>
  );
}
