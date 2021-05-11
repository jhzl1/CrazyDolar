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
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
      <Router>
        <Navegation />
        <Switch>
          {/* <Route path="/" exact>
          </Route> */}
          {/* comentario x */}
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute
            path="/app"
            component={Cotizaciones}
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
          />
          <Route path="/registro">
            <Registro />
          </Route>
          <Route path="/app">
            <Cotizaciones />
          </Route>
          <Route path="/calculadora">
            <Calculadora />
          </Route>
          <PrivateRoutes>
            <Switch>
              {" "}
              <Route path="/app">
                <Cotizaciones />
              </Route>
              <Route path="/calculadora">
                <Calculadora />
              </Route>
            </Switch>
          </PrivateRoutes>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
