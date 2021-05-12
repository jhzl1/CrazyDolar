import React from "react";
import Cotizaciones from "./components/Cotizaciones";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Navegation from "./components/Navegation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Calculadora from "./components/Calculadora";
import Registro from "./components/Registro";
import "antd/dist/antd.css";
import Error404 from "./components/Error404";
import PrivateRoute from "./components/PrivateRoute";
import AuthProvider from "./components/auth/AuthProvider";

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navegation />
          <Switch>
            <Route path="/" exact component={Home} />

            <Route path="/login" component={Login} />

            <Route path="/registro" component={Registro} />

            <PrivateRoute path="/app" component={Cotizaciones} />

            <PrivateRoute path="/calculadora" component={Calculadora} />

            <Route path="*" component={Error404} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
