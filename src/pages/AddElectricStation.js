import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../i18n.js";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";
import axios from "axios";

const errorControlLogin = (errorId) => {
  switch (errorId) {
    case 2:
      alert("Creation error");
      break;
    case 8:
      alert(
        "Error: Required fields are empty: Direction, Length, Latitude, Municipality and CodeProv"
      );
      break;
    default:
      break;
  }
};

const checkTextInputNotEmpty = (input) => {
  if (
    input.direction === "" ||
    input.municipality === "" ||
    input.codeProv === "" ||
    input.length === "" ||
    input.latitude === "" ||
    input.direction === undefined ||
    input.municipality === undefined ||
    input.codeProv === undefined ||
    input.length === undefined ||
    input.latitude === undefined
  ) {
    console.log(
      input.direction,
      input.municipality,
      input.province,
      input.codeProv,
      input.length,
      input.latitude,
      input.electricity,
      input.velocity,
      input.vehicle,
      input.connection,
      input.promoter,
      input.spots,
      input.power
    );
    console.log("Required fields are empty");
    errorControlLogin(8);
    return false;
  } else {
    console.log("Fields are not empty");
    return true;
  }
};

const useValidation = () => {
  return { checkTextInputNotEmpty };
};

export default function AddElectricStation() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const validation = useValidation();
  const [input, setInput] = React.useState({});

  const handleChange = (e) => {
    console.log("change");
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  async function createElectricStation(input) {
    try {
      console.log(
        input.direction,
        input.municipality,
        input.province,
        input.codeProv,
        input.length,
        input.latitude,
        input.electricity,
        input.velocity,
        input.vehicle,
        input.connection,
        input.promoter,
        input.spots,
        input.power
      );
      /*const result = await axios.post(
        `http://${process.env.REACT_APP_BASE_URL}/api/v2/estaciones`,
        {
          direccion: input.direction,
          latitud: input.latitude,
          longitud: input.length,
          municipio: input.municipality,
          provincia: input.province,
          codiProv: input.codeProv,
          tipoCorriente: input.electricity,
          tipoVelocidad: input.velocity,
          tipoVehiculo: input.vehicle,
          tipoConexion: input.connection,
          promotor: input.promoter,
          potencia: input.power,
          nPlaces: input.spots,
        }
      );*/
      const result = await axios.post(
        `http://localhost:3000/api/v2/estaciones/`,
        {
          direccion: input.direction,
          latitud: input.latitude,
          longitud: input.length,
          municipio: input.municipality,
          provincia: input.province,
          codiProv: input.codeProv,
          tipoCorriente: input.electricity,
          tipoVelocidad: input.velocity,
          tipoVehiculo: input.vehicle,
          tipoConexion: input.connection,
          promotor: input.promoter,
          potencia: input.power,
          nPlaces: input.spots,
        },
        { withCredentials: true }
      );
      console.log(result);
      return true;
    } catch (error) {
      console.log("Error" + error);
      errorControlLogin(2);
      return false;
    }
  }

  return (
    <div>
      <h1 className="addStations-title">{t("Stations.AddElectricStation")}</h1>
      <div>
        <label className="text-input-addStation"></label>
        <input
          id="Input"
          type="text"
          name="direction"
          placeholder={t("Stations.Direction")}
          value={input.direction || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="text-input-addStation"></label>
        <input
          id="Input"
          type="text"
          name="municipality"
          placeholder={t("Stations.Municipality")}
          value={input.municipality || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="text-input-addStation"></label>
        <input
          id="Input"
          type="text"
          name="province"
          placeholder={t("Stations.Province")}
          value={input.province || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="text-input-addStation"></label>
        <input
          id="Input"
          type="text"
          name="codeProv"
          placeholder={t("Stations.CodeProv")}
          value={input.codeProv || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="text-input-addStation"></label>
        <input
          id="Input"
          type="text"
          name="length"
          placeholder={t("Stations.Length")}
          value={input.length || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="text-input-addStation"></label>
        <input
          id="Input"
          type="text"
          name="latitude"
          placeholder={t("Stations.Latitude")}
          value={input.latitude || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="text-input-addStation"></label>
        <input
          id="Input"
          type="text"
          name="electricity"
          placeholder={t("Stations.Electricity")}
          value={input.electricity || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="text-input-addStation"></label>
        <input
          id="Input"
          type="text"
          name="velocity"
          placeholder={t("Stations.Velocity")}
          value={input.velocity || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="text-input-addStation"></label>
        <input
          id="Input"
          type="text"
          name="vehicle"
          placeholder={t("Stations.Vehicle")}
          value={input.vehicle || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="text-input-addStation"></label>
        <input
          id="Input"
          type="text"
          name="connection"
          placeholder={t("Stations.Connection")}
          value={input.connection || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="text-input-addStation"></label>
        <input
          id="Input"
          type="text"
          name="promoter"
          placeholder={t("Stations.Promoter")}
          value={input.promoter || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="text-input-addStation"></label>
        <input
          id="Input"
          type="number"
          name="spots"
          placeholder={t("Stations.Spots")}
          value={input.spots || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="text-input-addStation"></label>
        <input
          id="Input"
          type="number"
          name="power"
          placeholder={t("Stations.Power")}
          value={input.power || ""}
          onChange={handleChange}
        />
      </div>

      <div className="createStation-button">
        <Button
          mode="contained"
          onClick={() => {
            if (validation.checkTextInputNotEmpty(input)) {
              console.log("Entro y cumplo el primer check");
              (async () => {
                if (await createElectricStation(input))
                  navigate("/ecoMobility/stations/electricStations");
              })();
            }
          }}
        >
          {t("Stations.CreateStation")}
        </Button>
      </div>
    </div>
  );
}
