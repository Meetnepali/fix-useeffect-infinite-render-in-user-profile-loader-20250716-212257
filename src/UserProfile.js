import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import "./UserProfile.css";

function UserProfile() {
  const { theme, language } = useContext(ThemeContext);
  return (
    <div className={`user-profile ${theme}`}>
      <h2>{language === "en" ? "User Profile" : "Perfil de Usuario"}</h2>
      <p>{language === "en" ? "Welcome! Update your settings above." : "¡Bienvenido! Modifica tus preferencias arriba."}</p>
    </div>
  );
}

export default UserProfile;
