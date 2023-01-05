import React from "react";
import "../App.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../images/EcoMobilityIcon2.png";
import Button from "@mui/material/Button";

const errorControlLogin = (errorId) => {
  switch (errorId) {
    case 2:
      //Alert.alert(t("Error_Control.Incorrect_Pass"));
      alert("Error_Control.Incorrect_Pass");
      break;
    case 7:
      //Alert.alert(t("Error_Control.Login_Ok"));
      alert("Error_Control.Login_Ok");
      break;
    case 8:
      //Alert.alert(t("Error_Control.Void_Fields"));
      alert("Error_Control.Void_Fields");
      break;
    default:
      break;
  }
};

const checkTextInputNotEmpty = (input) => {
  console.log(input.email, input.pssw);
  if (
    input.email === "" ||
    input.email === undefined ||
    input.email === "null" ||
    input.pssw === undefined ||
    input.pssw === "" ||
    input.pssw === "null"
  ) {
    console.log("Fields are empty");
    errorControlLogin(8);
    return false;
  } else {
    console.log("Fields are not empty");
    errorControlLogin(7);
    return true;
  }
};

const useValidation = () => {
  return { checkTextInputNotEmpty };
};

export default function Login({ navigation }) {
  const validation = useValidation();
  const url = `http://${process.env.REACT_APP_BASE_URL}/api/v2/`;
  const loginURL = url + "users/login";
  const { t } = useTranslation();
  const [input, setInput] = React.useState({});
  const navigate = useNavigate();

  async function createPostLogin(input) {
    console.log("El email es: " + input.email + " El pass es : " + input.pssw);
    console.log(loginURL);
    return await axios
      .post(
        `http://${process.env.REACT_APP_BASE_URL}/api/v2/users/login?email=${input.email}&password=${input.pssw}`
      )
      .then(function (response) {
        console.log("true");
        return true;
      })
      .catch(function (error) {
        console.log("Da error y el error es : " + error.response.data.message);
        errorControlLogin(2);
        return false;
      });
  }

  const handleChange = (e) => {
    console.log("change");
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="login-container">
      <img className="logo-container" src={logo} />

      <div>
        <label className="text-input-email"></label>
        <input
          id="Input"
          type="text"
          name="email"
          placeholder={t("Login.Email")}
          value={input.email || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="text-input-pssw"></label>
        <input
          id="Input"
          type="text"
          name="pssw"
          placeholder={t("Login.Password")}
          value={input.pssw || ""}
          onChange={handleChange}
        />
      </div>
      <div className="login-button">
        <Button
          mode="contained"
          onClick={() => {
            if (validation.checkTextInputNotEmpty(input)) {
              console.log("Entro y cumplo el primer check");
              (async () => {
                if (await createPostLogin(input)) navigate("/ecoMobility/home");
              })();
            }
          }}
        >
          {t("Login.Button")}
        </Button>
      </div>
    </div>
  );
}
