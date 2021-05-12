import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem("auth_token")) || ""
  );

  console.log(isAuthenticated);
  useEffect(() => {
    try {
      localStorage.setItem("auth_token", JSON.stringify(isAuthenticated));
    } catch (error) {
      localStorage.removeItem("auth_token");
    }
  }, [isAuthenticated]);

  console.log(isAuthenticated);

  const contextValue = {
    isAuthenticated,
    login(id) {
      setIsAuthenticated({ id: id, username: "Usuario Prueba " });
    },
    register(id) {
      setIsAuthenticated({ id: id });
    },
    logout() {
      setIsAuthenticated("");
      localStorage.removeItem("auth_token");
    },
    isLogged() {
      return !!isAuthenticated;
    },
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
