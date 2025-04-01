import React, { useContext } from "react";
import {
  TodosContext,
  LanguageContext,
  ThemeContext,
  THEMES,
  TRANSLATIONS,
} from "../../../../Context/context";
import styles from "./TaskItem.module.css";

export default function TaskItem({ todo }) {
  const { updateTodoStatus, updateTodoPriority, deleteTodo } =
    useContext(TodosContext);
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  const handleStatusChange = (e) => {
    updateTodoStatus(todo.id, e.target.value);
  };

  const handlePriorityChange = (e) => {
    updateTodoPriority(todo.id, e.target.value);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const taskItemClasses = [
    styles.taskItem,
    theme === THEMES.LIGHT ? styles.taskItemLight : styles.taskItemDark,
    todo.status === "done" ? styles.taskItemDone : "",
  ].join(" ");

  return (
    <div className={taskItemClasses}>
      <div className={`${styles.priority} ${styles[todo.priority]}`}></div>
      <div className={styles.taskText}>{todo.text}</div>

      <select
        value={todo.priority}
        onChange={handlePriorityChange}
        className={`${styles.statusSelect} ${
          theme === THEMES.LIGHT
            ? styles.statusSelectLight
            : styles.statusSelectDark
        }`}
      >
        <option value="low">{TRANSLATIONS.LOW_PRIORITY[language]}</option>
        <option value="medium">{TRANSLATIONS.MEDIUM_PRIORITY[language]}</option>
        <option value="high">{TRANSLATIONS.HIGH_PRIORITY[language]}</option>
      </select>

      <select
        value={todo.status}
        onChange={handleStatusChange}
        className={`${styles.statusSelect} ${
          theme === THEMES.LIGHT
            ? styles.statusSelectLight
            : styles.statusSelectDark
        }`}
      >
        <option value="open">{TRANSLATIONS.STATUS_OPEN[language]}</option>
        <option value="in progress">
          {TRANSLATIONS.STATUS_IN_PROGRESS[language]}
        </option>
        <option value="done">{TRANSLATIONS.STATUS_DONE[language]}</option>
      </select>

      <button
        onClick={handleDelete}
        className={`${styles.deleteBtn} ${
          theme === THEMES.LIGHT ? styles.deleteBtnLight : styles.deleteBtnDark
        }`}
      >
        {TRANSLATIONS.DELETE_BUTTON[language]}
      </button>
    </div>
  );
}
