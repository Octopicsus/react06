import React, { useContext, useState } from "react";
import {
  TodosContext,
  LanguageContext,
  ThemeContext,
  THEMES,
  TRANSLATIONS,
} from "../../../Context/context";
import styles from "./NewTask.module.css";

export default function NewTask() {
  const { addNewTodo } = useContext(TodosContext);
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  const [text, setText] = useState("");
  const [priority, setPriority] = useState("medium");

  const handleSaveValue = () => {
    if (text.trim()) {
      addNewTodo(text, priority);
      setText("");
    }
  };

  return (
    <div className={styles.newTaskForm}>
      <input
        className={`${styles.taskInput} ${
          theme === THEMES.LIGHT ? styles.lightInput : styles.darkInput
        }`}
        placeholder={TRANSLATIONS.NEW_TASK_PLACEHOLDER[language]}
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <select
        className={`${styles.prioritySelect} ${
          theme === THEMES.LIGHT ? styles.lightSelect : styles.darkSelect
        }`}
        value={priority}
        onChange={(event) => setPriority(event.target.value)}
      >
        <option value="low">{TRANSLATIONS.LOW_PRIORITY[language]}</option>
        <option value="medium">{TRANSLATIONS.MEDIUM_PRIORITY[language]}</option>
        <option value="high">{TRANSLATIONS.HIGH_PRIORITY[language]}</option>
      </select>

      <button
        className={`${styles.saveButton} ${
          theme === THEMES.LIGHT ? styles.lightButton : styles.darkButton
        }`}
        type="button"
        onClick={handleSaveValue}
      >
        {TRANSLATIONS.SAVE_BUTTON[language]}
      </button>
    </div>
  );
}
