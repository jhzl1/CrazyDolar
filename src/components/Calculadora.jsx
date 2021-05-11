import React from "react";
import MenuApp from "./MenuApp";

const Calculadora = () => {
  return (
    <div className="custom-container mt-1 row">
      <div className="col-2 container-menu-app">
        <MenuApp />
      </div>
      <div className="col-10 p-4">
        <h4 className="text-center">Calculadora</h4>
      </div>
    </div>
  );
};

export default Calculadora;
