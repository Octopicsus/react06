import { createContext } from "react";

export const THEMES = {
  LIGHT: { titleRu: "Светлая", titleEn: "Light" },
  DARK: { titleRu: "Тёмная", titleEn: "Dark" },
};

export const LANGUAGES = {
  RU: "Ru",
  EN: "En",
};

export const TRANSLATIONS = {
  LOGINPLACEHOLDER: {
    [LANGUAGES.RU]: "Логин",
    [LANGUAGES.EN]: "Login",
  },

  PASSWORDPLACEHOLDER: {
    [LANGUAGES.RU]: "Пароль",
    [LANGUAGES.EN]: "Password",
  },

  SIGNINBUTTON: {
    [LANGUAGES.RU]: "Войти",
    [LANGUAGES.EN]: "Sign in",
  },

  ERRORMESSAGE: {
    [LANGUAGES.RU]: "Неверное имя пользователя или пароль",
    [LANGUAGES.EN]: "Invalid username or password",
  },

  // TodoApp translations
  TODO_APP_TITLE: {
    [LANGUAGES.RU]: "Список задач",
    [LANGUAGES.EN]: "Todo Application",
  },
  
  NEW_TASK_PLACEHOLDER: {
    [LANGUAGES.RU]: "Введите задачу",
    [LANGUAGES.EN]: "Enter what you wanna do",
  },
  
  SAVE_BUTTON: {
    [LANGUAGES.RU]: "Сохранить",
    [LANGUAGES.EN]: "Save",
  },

  ADD_BTN:{
    [LANGUAGES.RU]: "Добавить",
    [LANGUAGES.EN]: "Add",
  },
  
  DELETE_BUTTON: {
    [LANGUAGES.RU]: "Удалить",
    [LANGUAGES.EN]: "Delete",
  },
  
  // Task priorities
  PRIORITY: {
    [LANGUAGES.RU]: "Приоритет",
    [LANGUAGES.EN]: "Priority",
  },
  
  LOW_PRIORITY: {
    [LANGUAGES.RU]: "Низкий",
    [LANGUAGES.EN]: "Low",
  },
  
  MEDIUM_PRIORITY: {
    [LANGUAGES.RU]: "Средний",
    [LANGUAGES.EN]: "Medium",
  },
  
  HIGH_PRIORITY: {
    [LANGUAGES.RU]: "Высокий",
    [LANGUAGES.EN]: "High",
  },
  
  // Task statuses
  STATUS: {
    [LANGUAGES.RU]: "Статус",
    [LANGUAGES.EN]: "Status",
  },
  
  STATUS_OPEN: {
    [LANGUAGES.RU]: "Открыто",
    [LANGUAGES.EN]: "Open",
  },
  
  STATUS_IN_PROGRESS: {
    [LANGUAGES.RU]: "В процессе",
    [LANGUAGES.EN]: "In Progress",
  },
  
  STATUS_DONE: {
    [LANGUAGES.RU]: "Выполнено",
    [LANGUAGES.EN]: "Done",
  },
};

export const ThemeContext = createContext(THEMES.LIGHT);
export const LanguageContext = createContext(LANGUAGES.RU);
export const AuthContext = createContext({});
export const TodosContext = createContext({});