import React, { useContext } from "react";
import { TodosContext, ThemeContext, THEMES } from "../../../Context/context";
import TaskItem from "./TaskItem/TaskItem";
import styles from "./TaskList.module.css";

export default function TaskList() {
  const { todos } = useContext(TodosContext);
  const { theme } = useContext(ThemeContext);

  return (
    <ul
      className={`${styles.taskList} ${
        theme === THEMES.LIGHT ? styles.lightTaskList : styles.darkTaskList
      }`}
    >
      {todos.map((todo) => (
        <li key={todo.id}>
          <TaskItem todo={todo} />
        </li>
      ))}
    </ul>
  );
}
