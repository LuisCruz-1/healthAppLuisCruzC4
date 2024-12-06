import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";
import DHLogo from "../images/DH.png"; // Asegúrate de que esta imagen esté correctamente ubicada

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    const newTheme = state.theme === "light" ? "dark" : "light";
    dispatch({ type: "SET_THEME", payload: newTheme });
  };

  return (
    <nav className={`navbar ${state.theme}`}>
      <Link to="/home">
        <img className="logo" src={DHLogo} alt="Digital House Logo" />
      </Link>
      <ul>
        <li>
          <Link to="/home">Inicio</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
        <li>
          <Link to="/favs">Destacados</Link>
        </li>
        <button
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label={
            state.theme === "light"
              ? "Cambiar a modo oscuro"
              : "Cambiar a modo claro"
          }
        >
          {state.theme === "light" ? "🌙" : "☀️"}
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
