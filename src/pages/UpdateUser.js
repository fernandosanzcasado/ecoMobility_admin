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
    default:
      break;
  }
};

export default function UpdateUser() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [input, setInput] = React.useState({});
  const [stations, setStations] = React.useState([]);
  let { email } = useParams();

  const handleChange = (e) => {
    console.log("change");
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  React.useEffect(() => {
    async function getUser() {
      try {
        console.log(email);

        const result = await axios.get(
          `http://localhost:3000/api/v2/estaciones/info/${email}`,
          { withCredentials: true }
        );
        setStations(result.data);
      } catch (error) {
        console.log("Error" + error);
        errorControlLogin(2);
      }
    }
    getUser();
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

      console.log(email);

      const result = await axios.put(
        `http://localhost:3000/api/v2/estaciones/info/${email}`,
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
