import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="d-flex flex-column align-items-center home-container">
      <h1 className="mb-2">!El precio del dólar está loco!</h1>
      <span className="text-home fs-2">
        No le pierdas de vista con CrazyDolar
      </span>
      <span className="text-home fs-5">
        Actualizaciones cada hora con el precio del dólar, euro, peso colombiano
        y mas ¡gratis!
      </span>
      <div className="d-flex flex-row">
        <Link to="/registro" className="m-2 btn btn-primary">
          Crear una cuenta
        </Link>
      </div>
    </div>
  );
};

export default Home;
