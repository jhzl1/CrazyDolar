import { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  setIsAuthenticated,
  ...rest.
}) => {
  const [isValidating, setIsValidating] = useState(true);

  useEffect(() => {
    const validateUser = async () => {
      setIsValidating(true);
      try {
        const authToken = localStorage.getItem("auth_token");

        // setIsAuthenticated(!!authToken);
        const result = await firebase.validateToken(authToken);

        setIsAuthenticated(result);
      } catch (error) {
        console.error(error);
      }
      setIsValidating(false);
    };
  }, []);

  if (isValidating) return <div>Validando usuario...</div>;

  return (
    <Route
      {...rest}
      render={(props) => // location, match, history
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
