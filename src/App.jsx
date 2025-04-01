import "./App.css";
import React from "react";
import Content from "./Widgets/Content/Content";
import ThemeProvider from "./Widgets/Providers/ThemeProvider";
import LanguageProvider from "./Widgets/Providers/LanguageProvider";
import AuthProvider from "./Widgets/Providers/AuthProvider";
import Navigation from "./Widgets/Navigation/Navigation";


function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navigation />
        <AuthProvider>
          <Content />
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
