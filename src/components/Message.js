import React from "react";
import "../App.css";

import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";

export default function Message({ respuesta, msg, sentMsg }) {
  return (
    <div>
      {respuesta && (
        <div style={styles.respuestaBox}>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>:)</Avatar>
          <label style={styles.respuesta}>{msg}</label>
        </div>
      )}
      {sentMsg && (
        <label style={styles.msgbox}>
          <label style={styles.msgtext}>{msg}</label>
        </label>
      )}
    </div>
  );
}

const styles = StyleSheet.create({
  msgbox: {
    backgroundColor: "green",
    maxWidth: "70%",
    borderRadius: 10,
    padding: 5,
    alignSelf: "flex-end",
    marginVertical: 5,
    marginHorizontal: 5,
  },
  msgtext: { color: "#fff", fontSize: 16 },
  respuesta: {
    color: "black",
    fontSize: 16,
    marginRight: 30,
  },
  respuestaBox: {
    backgroundColor: "white",
    maxWidth: "75%",
    borderRadius: 10,
    paddingRight: 10,
    alignSelf: "flex-start",
    marginVertical: 5,
    marginHorizontal: 5,
    borderWidth: 0.5,
    borderColor: "grey",
    flexDirection: "row",
  },
});
