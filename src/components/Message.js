import React from "react";
import "../App.css";

import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import "./Message.css";

export default function Message({ respuesta, msg, sentMsg }) {
  return (
    <div>
      <div className="respuestaBox">
        <Avatar sx={{ bgcolor: deepPurple[500] }}>:)</Avatar>
        <label className="respuesta">{msg}</label>
      </div>

      {sentMsg && (
        <label className="msgbox">
          <label className="msgtext">{msg}</label>
        </label>
      )}
    </div>
  );
}
