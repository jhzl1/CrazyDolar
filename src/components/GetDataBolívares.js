import axios from "axios";
import { useState } from "react";

const [data, setData] = useState({ initialState });

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
          icon: <img src={Colombia} alt="" style={{ height: 30, width: 30 }} />,
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

export default getData;
