import { Route, Redirect } from "react-router-dom";
import useAuth from "./auth/useAuth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useAuth();

  return (
    <Route {...rest}>
      {auth.isAuthenticated ? <Component /> : <Redirect to="/login" />}
    </Route>
  );
};

export default PrivateRoute;
