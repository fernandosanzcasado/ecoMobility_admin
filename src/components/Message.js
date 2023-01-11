import React from "react";
import "../App.css";

import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import "./Message.css";

export default function Message({ respuesta, msg, sentMsg }) {
  return (
    <div>
      {respuesta && (
        <label className="respuestaBox">
          <label className="msgtext">{msg}</label>
        </label>
      )}
      {sentMsg && (
        <label className="msgbox">
          <label className="msgtext">{msg}</label>
        </label>
      )}
    </div>
  );
}
