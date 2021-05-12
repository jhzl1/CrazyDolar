import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = "";

  return (
    <Route {...rest}>
      {user.length < 1 ? <Component /> : <Redirect to="/login" />}
    </Route>
  );
};

export default PrivateRoute;
