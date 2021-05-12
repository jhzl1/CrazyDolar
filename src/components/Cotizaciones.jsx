import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import "moment/locale/es";
import MenuApp from "./MenuApp";
import Colombia from "../components/img/colombia.png";
import ModalCompartir from "./ModalCompartir";

const Cotizaciones = () => {
  const [data, setData] = useState({
    fecha: null,
    hora: null,
    monedas: [],
  });

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://s3.amazonaws.com/dolartoday/data.json"
      );
      const dataObtained = res.data;
      setData({
        ...data,
        fecha: moment().format("LL"),
        hora: moment().format("h:mm a"),
        monedas: [
          {
            name: "Dolar",
            icon: (
              <i
                className="fas fa-dollar-sign"
                style={{ color: "#85BB65", fontSize: "30px" }}
              ></i>
            ),
            price: dataObtained.USD.transferencia,
            nameCoinDestination: "Bs",
          },
          {
            name: "Dolar efectivo",
            icon: (
              <i
                className="fas fa-money-bill-alt"
                style={{ color: "#85BB65", fontSize: "30px" }}
              ></i>
            ),
            price: dataObtained.USD.efectivo,
            nameCoinDestination: "Bs",
          },
          {
            name: "Bolívar Cúcuta",
            icon: (
              <img src={Colombia} alt="" style={{ height: 30, width: 30 }} />
            ),
            price: dataObtained.COL.efectivo,
            nameCoinDestination: "Bs",
          },
          {
            name: "Euro",
            icon: (
              <i
                className="fas fa-euro-sign"
                style={{ color: "#1b3ce2", fontSize: "30px" }}
              ></i>
            ),
            price: dataObtained.EUR.transferencia,
            nameCoinDestination: "Bs",
          },
          {
            name: "Bitcoin",
            icon: (
              <i
                className="fab fa-bitcoin"
                style={{ color: "#f7931a", fontSize: "30px" }}
              ></i>
            ),
            price: dataObtained.USD.localbitcoin_ref,
            nameCoinDestination: "Bs",
          },
          {
            name: "Dolar en Colombia (TRM)",
            icon: (
              <i
                className="fas fa-dollar-sign"
                style={{ color: "#85BB65", fontSize: "30px" }}
              ></i>
            ),
            price: dataObtained.USDCOL.ratetrm,
            nameCoinDestination: "Pesos",
          },
          {
            name: "Barril de Petróleo",
            icon: (
              <i className="fas fa-gas-pump" style={{ fontSize: "30px" }}></i>
            ),
            price: dataObtained.MISC.petroleo,
            nameCoinDestination: "Dólares",
          },
        ],
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    moment.locale("es");

    getData();
  }, []);

  return (
    <div className="custom-container mt-1 row">
      <div className="col-2 container-menu-app">
        <MenuApp />
      </div>{" "}
      <div className="row col-10 p-4">
        <h3>
          Fecha: {data.fecha}, {data.hora}{" "}
        </h3>
        <span className="fs-5">
          El precio de los activos más importantes en Venezuela es el siguiente:
        </span>
        {data.dia === null ? (
          <span>Cargando...</span>
        ) : (
          <ul className="d-flex flex-column cotizaciones mt-4">
            {data.monedas.map((item) => (
              <li
                key={item.name}
                className="item-cotizacion p-3 d-flex flex-row m-1 align-items-center"
              >
                <span className="text-center col-1">{item.icon}</span>
                <h5 className="col-4 mt-2">{item.name}</h5>
                <i
                  className="fas fa-angle-right"
                  style={{ color: "#517291", fontSize: "30px" }}
                ></i>
                <span className="text-center col-4">
                  {item.price} {item.nameCoinDestination}
                </span>
                <ModalCompartir />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cotizaciones;
