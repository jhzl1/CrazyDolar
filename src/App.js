import React from "react";
import Cotizaciones from "./components/Cotizaciones";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Navegation from "./components/Navegation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Calculadora from "./components/Calculadora";
import Registro from "./components/Registro";
import "antd/dist/antd.css";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navegation />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registro">
            <Registro />
          </Route>
          <Route path="/app">
            <Cotizaciones />
          </Route>
          <Route path="/calculadora">
            <Calculadora />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
