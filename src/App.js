import React, { useState } from "react";
import PreferencesPanel from "./PreferencesPanel";
import UserProfile from "./UserProfile";
import ThemeContext from "./ThemeContext";
import "./App.css";

function App() {
  // App manages theme so entire app can update on preference changes
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");

  return (
    <ThemeContext.Provider value={{ theme, setTheme, language, setLanguage }}>
      <div className={`app ${theme}`}>
        <header className="app-header">
          <h1>Demo User Preferences</h1>
        </header>
        <PreferencesPanel />
        <main>
          <UserProfile />
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
