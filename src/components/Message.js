import React from "react";
import "../App.css";

import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import "./Message.css";

export default function Message({ respuesta, msg, sentMsg }) {
  var customClasses = "";
  var customJustify = "";
  if (respuesta === true) {
    customClasses = "respuestaBox justify-content-end";
    customJustify = "justify-content-start";
  } else if (sentMsg === true) {
    customClasses = "msgbox justify-content-start";
    customJustify = "justify-content-end";
  }

  return (
    <div className={"d-flex flex-row " + customJustify}>
      <div
        className={
          "d-flex flex-row pl-4 pr-4 pt-2 pb-2 rounded-4 m-1 " + customClasses
        }
      >
        <label className="container mr-1 msgtext">{msg}</label>
      </div>
    </div>
  );
}
