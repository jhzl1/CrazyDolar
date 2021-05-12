import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, withRouter } from "react-router-dom";
import logo from "./img/crazydollar.jpg";
import useAuth from "./auth/useAuth";

const Navegation = (props) => {
  const auth = useAuth();

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
        <Nav>
          {!auth.isLogged() && (
            <>
              <NavLink className="nav-link" to="/login">
                Ingresar
              </NavLink>
              <NavLink to="/registro" className="nav-link">
                Regístrate
              </NavLink>
            </>
          )}

          {auth.isLogged() && (
            <NavLink className="nav-link" to="/" onClick={auth.logout}>
              Cerrar Sesión
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Navegation);
