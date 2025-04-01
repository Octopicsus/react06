import React, { useContext } from "react";
import { AuthContext, ThemeContext, THEMES } from "../../Context/context";
import styles from "./Content.module.css";
import LoginForm from "../LoginForm/LoginForm";
import TodoApp from "../TodoApp/TodoApp";


export default function Content() {
  const { theme } = useContext(ThemeContext);
  const { isAuth } = useContext(AuthContext);

  return (
    <div
      className={
        theme === THEMES.LIGHT ? styles.lightBackground : styles.darkBackground
      }
    >
      {isAuth ? <TodoApp/> : <LoginForm/> }
    </div>
  );
}