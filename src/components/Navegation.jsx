import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, withRouter } from "react-router-dom";
import logo from "./img/crazydollar.jpg";
import { auth } from "./firebase";

const Navegation = (props) => {
  const [isAuthent, setIsAuthent] = useState("");

  useEffect(() => {
    if (auth.currentUser) {
      console.log("hay usuario");
      setIsAuthent("hay vida");
    } else {
      console.log(" no hay usuario");
      props.history.push("/login");
    }
  }, [props.history]);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="p-2">
      <Navbar.Brand as={NavLink} to="/" className="navbar-brand fs-2">
        <img
          alt=""
          src={logo}
          width="50"
          height="50"
          className="d-inline-block mx-2 logo"
        />
        CrazyDolar
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        {isAuthent ? (
          <Nav>
            <NavLink
              className="nav-link"
              to="/"
              /* onClick={() => closeSesion()} */
              //  Aqui debe invalidar token y eliminar de localstorage y redirigir a /login
            >
              Cerrar Sesión
            </NavLink>
          </Nav>
        ) : (
          <Nav>
            <NavLink className="nav-link" to="/login">
              Ingresar
            </NavLink>
            <NavLink to="/registro" className="nav-link">
              Regístrate
            </NavLink>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Navegation);
