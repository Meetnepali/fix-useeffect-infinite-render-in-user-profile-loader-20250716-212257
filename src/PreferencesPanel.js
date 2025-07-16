import React, { useContext, useEffect } from "react";
import ThemeContext from "./ThemeContext";
import "./PreferencesPanel.css";

function PreferencesPanel() {
  const { theme, setTheme, language, setLanguage } = useContext(ThemeContext);

  // This effect handles persistence but may have dependency issues
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
    const storedLang = localStorage.getItem("language");
    if (storedLang) {
      setLanguage(storedLang);
    }
  }, []);

  // Synchronize preference changes with localStorage (check effect deps)
  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("language", language);
  });

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const switchLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <section className="preferences-panel">
      <div className="toggle-row">
        <span>Theme: </span>
        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>
      <div className="toggle-row">
        <span>Language: </span>
        <button onClick={switchLanguage}>
          {language === "en" ? "Español" : "English"}
        </button>
      </div>
    </section>
  );
}

export default PreferencesPanel;
