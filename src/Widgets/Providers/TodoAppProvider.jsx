import React, { useEffect, useState } from "react";
import { TodosContext } from "../../Context/context";

export default function TodoAppProvider({ children }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("todos"));

    if (savedTasks) {
      setTodos(savedTasks);
    }
  }, []);

  const addNewTodo = (text, priority) => {
    const newTodo = {
      id: Date.now(),
      text,
      priority: priority || "medium",
      status: "open"
    };

    const newTodos = [...todos, newTodo];

    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const updateTodoStatus = (id, status) => {
    const updatedTodos = todos.map(todo => 
      todo.id === id ? { ...todo, status } : todo
    );

    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const updateTodoPriority = (id, priority) => {
    const updatedTodos = todos.map(todo => 
      todo.id === id ? { ...todo, priority } : todo
    );

    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <TodosContext.Provider value={{ todos, addNewTodo, updateTodoStatus, updateTodoPriority, deleteTodo }}>
      {children}
    </TodosContext.Provider>
  );
}