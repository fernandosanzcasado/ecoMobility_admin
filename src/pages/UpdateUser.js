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
      alert("Update error");
      break;
    default:
      break;
  }
};

export default function UpdateUser() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [input, setInput] = React.useState({});
  const [users, setUsers] = React.useState([]);
  let { email } = useParams();

  const handleChange = (e) => {
    console.log("change");
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeCheckbox = (e) => {
    console.log("change");
    setInput({
      ...input,
      [e.target.name]: e.target.checked,
    });
  };

  React.useEffect(() => {
    async function getUser() {
      try {
        console.log(email);

        const result = await axios.get(
          `http://${process.env.REACT_APP_BASE_URL}/api/v2/users/admin/getUser/${email}`,
          { withCredentials: true }
        );
        input.name = result.data.name;
        input.surnames = result.data.surnames;
        input.isBlocked = result.data.isBlocked;
        input.isSuperuser = result.data.isSuperuser;

        setUsers(result.data);
      } catch (error) {
        console.log("Error" + error);
        errorControlLogin(2);
      }
    }
    getUser();
  }, []);

  React.useEffect(() => {
    console.log(users);
  }, [users]);

  async function updateUser(input) {
    try {
      console.log(
        input.name,
        input.surnames,
        input.isSuperuser,
        input.isBlocked
      );

      const result = await axios.put(
        `http:///${process.env.REACT_APP_BASE_URL}/api/v2/users/admin/updateUser/${email}`,
        {
          surnames: input.surnames,
          isBlocked: input.isBlocked,
          isSuperuser: input.isSuperuser,
          name: input.name,
        },
        { withCredentials: true }
      );
      console.log(result);
      return true;
    } catch (error) {
      console.log("Error" + error.response.data);
      errorControlLogin(2);
      return false;
    }
  }

  return (
    <div>
      <h1 className="addStations-title">{t("Users.UpdateTitle")}</h1>
      <div>
        <label className="text-input-addStation"></label>
        <input
          id="Input"
          type="text"
          name="name"
          placeholder={t("Users.Name")}
          value={input.name || users.name || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="text-input-addStation"></label>
        <input
          id="Input"
          type="text"
          name="surnames"
          placeholder={t("Users.Surnames")}
          value={input.surnames || users.surnames || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="text-input-addStation"></label>
        <input
          id="Input"
          type="text"
          name="isSuperuser"
          value={input.isSuperuser || users.isSuperuser || ""}
          placeholder={t("Users.isSuperuser")}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="text-input-addStation"> </label>
        <input
          id="Input"
          type="text"
          name="isBlocked"
          placeholder={t("Users.isBlocked")}
          value={input.isBlocked || users.isBlocked || ""}
          onChange={handleChange}
        />
      </div>
      <div className="createStation-button">
        <Button
          mode="contained"
          onClick={() => {
            console.log("Entro y cumplo el primer check");
            (async () => {
              if (await updateUser(input)) navigate("/ecoMobility/users");
            })();
          }}
        >
          {t("Users.Update")}
        </Button>
      </div>
    </div>
  );
}
