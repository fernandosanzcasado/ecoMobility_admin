import React from "react";
import "../App.css";
import { useTranslation } from "react-i18next";
import axios from "axios";
import logo from "../images/EcoMobilityIcon2.png";
import Button, { ButtonProps } from "@mui/material/Button";

const errorControlLogin = (errorId) => {
  const alertMessage = "";
  switch (errorId) {
    case 2:
      //Alert.alert(t("Error_Control.Incorrect_Pass"));
      alertMessage = "Error_Control.Incorrect_Pass";
      return alertMessage;
      break;
    case 7:
      //Alert.alert(t("Error_Control.Login_Ok"));
      alertMessage = "Error_Control.Login_Ok";
      return alertMessage;
      break;
    case 8:
      //Alert.alert(t("Error_Control.Void_Fields"));
      alertMessage = "Error_Control.Void_Fields";
      return alertMessage;
      break;
    default:
      break;
  }
};

const checkTextInputNotEmpty = (email, password) => {
  const alertMessage = " ";
  if (email === "" || password === "") {
    alertMessage = errorControlLogin(8);
    return false;
  } else {
    errorControlLogin(7);
    return true;
  }
};

const useValidation = () => {
  return { checkTextInputNotEmpty };
};

export default function Login({ navigation }) {
  const [userEmail, setUserEmail] = React.useState([]);
  const [userPassword, setUserPassword] = React.useState([]);
  const validation = useValidation();
  const url = `http://${process.env.REACT_APP_BASE_URL}/api/v2/`;
  const loginURL = url + "users/login";
  const { t } = useTranslation();

  async function createPostLogin(userEmail, userPassword) {
    console.log("El email es: " + userEmail + " El pass es : " + userPassword);
    console.log(loginURL);
    return await axios
      .post(loginURL, {
        email: userEmail,
        password: userPassword,
      })
      .then(function (response) {
        return true;
      })
      .catch(function (error) {
        console.log("Da error");
        console.log("Da error y el error es : " + error.response.data.message);
        //errorControlLogin(2);
        return false;
      });
  }

  /*React.useEffect(() => {
    const chargeView = navigation.addListener("focus", () => {
      clearText();
    });
    return chargeView;
  }, [navigation]);*/

  const clearText = () => {
    setUserEmail("");
    setUserPassword("");
  };

  return (
    <div className="login-container">
      <img className="logo-container" src={logo} />
      <div>
        <label className="text-input-email"></label>
        <input
          id="Input"
          type="email"
          name="email"
          classname="text-input"
          placeholder={t("Login.Email")}
          onChangeText={(newtext) => setUserEmail(newtext)}
        />
      </div>
      <div>
        <label className="text-input-pssw"></label>
        <input
          id="Input"
          type="string"
          name="password"
          placeholder={t("Login.Password")}
          onChangeText={(newtext) => setUserPassword(newtext)}
          secureTextEntry
        />
      </div>
      <div className="login-button">
        <Button
          variant="contained"
          button-color={"#27CF10"}
          onClick={() => {
            if (validation.checkTextInputNotEmpty(userEmail, userPassword)) {
              console.log("Entro y cumplo el primer check");
              (async () => {
                if (await createPostLogin(userEmail, userPassword))
                  navigation.navigate("Home");
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
