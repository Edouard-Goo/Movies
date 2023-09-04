import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="nav-bar">
      <img src="logo-no-background.svg" alt="logo" className="img-logo" />
      <nav className="nav-bar">
        <NavLink className="links" to={"/"}>
          Accueil
        </NavLink>
        <NavLink className="links" to={"/movies"}>
          Movies
        </NavLink>
        <NavLink className="links" to={"/avis"}>
          Avis
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
