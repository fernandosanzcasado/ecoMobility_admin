import React from "react";
import "../App.css";
import { useNavigate, useParams } from "react-router-dom";
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

export default function UpdateElectricStation() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [input, setInput] = React.useState({});
  const [stations, setStations] = React.useState([]);
  let { id } = useParams();

  const handleChange = (e) => {
    console.log("change");
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  React.useEffect(() => {
    async function getElectricStation() {
      try {
        console.log(id);

        const result = await axios.get(
          `http:///${process.env.REACT_APP_BASE_URL}/api/v2/estaciones/info/${id}`,
          { withCredentials: true }
        );
        input.direction = result.data.direccion;
        input.municipality = result.data.municipio;
        input.province = result.data.provincia;
        input.codeProv = result.data.codiProv;
        input.length = result.data.longitud;
        input.latitude = result.data.latitud;
        input.electricity = result.data.tipoCorriente;
        input.velocity = result.data.tipoVelocidad;
        input.vehicle = result.data.tipoVehiculo;
        input.connection = result.data.tipoConnection;
        input.promoter = result.data.promotor;
        input.spots = result.data.nPlaces;
        input.power = result.data.potencia;
        setStations(result.data);
      } catch (error) {
        console.log("Error" + error);
        errorControlLogin(2);
      }
    }
    getElectricStation();
  }, []);

  React.useEffect(() => {
    console.log(stations);
  }, [stations]);

  async function updateElectricStation(input) {
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

      console.log(id);

      const result = await axios.put(
        `http:///${process.env.REACT_APP_BASE_URL}/api/v2/estaciones/info/${id}`,
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
      <h1 className="addStations-title">
        {t("Stations.UpdateElectricStation")}
      </h1>

      <div>
        <label className="text-input-addStation"></label>
        <input
          id="Input"
          type="text"
          name="direction"
          placeholder={t("Stations.Direction")}
          value={input.direction || stations.direccion || ""}
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
          value={input.municipality || stations.municipio || ""}
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
          value={input.province || stations.provincia || ""}
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
          value={input.codeProv || stations.codiProv || ""}
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
          value={input.length || stations.longitud || ""}
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
          value={input.latitude || stations.latitud || ""}
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
          value={input.electricity || stations.tipoCorriente || ""}
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
          value={input.velocity || stations.tipoVelocidad || ""}
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
          value={input.vehicle || stations.tipoVehiculo || ""}
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
          value={input.connection || stations.tipoConexion || ""}
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
          value={input.promoter || stations.promotor || ""}
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
          value={input.spots || stations.nPlaces || ""}
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
          value={input.power || stations.potencia || ""}
          onChange={handleChange}
        />
      </div>

      <div className="createStation-button">
        <Button
          mode="contained"
          onClick={() => {
            console.log("Entro y cumplo el primer check");
            (async () => {
              if (await updateElectricStation(input))
                navigate("/ecoMobility/stations/electricStations");
            })();
          }}
        >
          {t("Stations.UpdateStation")}
        </Button>
      </div>
    </div>
  );
}
