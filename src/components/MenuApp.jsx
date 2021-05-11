import React from "react";
import Usuario from "./img/usuario.png";
import { NavLink } from "react-router-dom";

const MenuApp = () => {
  return (
    <div className="d-flex flex-column">
      <div className="datos-usuario d-flex flex-column align-items-center mb-5">
        <h5 className="text-center  my-4">¡Epale Usuario!</h5>
        <img src={Usuario} alt="" className="user-picture" />
      </div>

      <div className="d-flex flex-column align-items-center">
        <ul className="menu-app d-flex flex-column align-items-center p-0">
          <li className=" p-2 item-menu-app">
            <NavLink className="nav-link text-dark disabled" to="/app">
              Mi Perfil
            </NavLink>
          </li>
          <li className=" p-2 item-menu-app">
            <NavLink className="nav-link text-dark " to="/app">
              Cotizaciones
            </NavLink>
          </li>
          <li className=" p-2 item-menu-app">
            <NavLink className="nav-link text-dark disabled" to="/calculadora">
              Calculadora
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuApp;
