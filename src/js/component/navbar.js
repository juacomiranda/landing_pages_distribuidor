import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export const Navbar = () => {
  return (
    <nav className="navbar bg-danger border-bottom border-body">
      <div className="container">
        <a className="navbar-brand link-light" href="#">
          <img
            src="https://www.clarochile.cl/portal/cl/recursos_tema/assets/vector/logo-claro-blanco.svg"
            alt="Logo"
            className="d-inline-block align-text-top me-4"
          ></img>
        </a>
      </div>
    </nav>
  );
};
