import React, { useContext } from "react";
import styles from "./TodoApp.module.css";
import TodoAppProvider from "../Providers/TodoAppProvider";
import NewTask from "./NewTask/NewTask";
import TaskList from "./TaskList/TaskList";
import {
  LanguageContext,
  ThemeContext,
  THEMES,
  TRANSLATIONS,
} from "../../Context/context";

export default function TodoApp() {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${styles.list} ${
        theme === THEMES.LIGHT ? styles.lightList : styles.darkList
      }`}
    >
      <h3
        className={
          theme === THEMES.LIGHT ? styles.lightTitle : styles.darkTitle
        }
      >
        {TRANSLATIONS.TODO_APP_TITLE[language]}
      </h3>
      <TodoAppProvider>
        <NewTask />
        <TaskList />
      </TodoAppProvider>
    </div>
  );
}
