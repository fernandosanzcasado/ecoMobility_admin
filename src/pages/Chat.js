import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

import Message from "../components/Message";

function MessageList() {
  const [messages, setMessages] = useState([
    { sentMsg: true, msg: "ALAAA ALAAAAAAAAAAAAAAAAAAAAAA" },
    { respuesta: true, msg: "DIAMANTE PAL FREEEEEEEEEEEEEEEEEEEEEEE quepasa" },
  ]);

  useEffect(() => {
    const socket = socketIOClient("http://localhost:3000"); // create a new socket connection
    // listen for new messages from the server
    socket.on("new message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });
    return () => {
      socket.disconnect(); // clean up by disconnecting the socket on unmount
    };
  }, []);

  return (
    <div className="container d-flex flex-column chatContainer">
      {messages.map((msg, index) => {
        if (msg.sentMsg) {
          return (
            <div
              key={index}
              className="messageFromAdmin d-flex flex-row justify-content-end"
            >
              {/* <span className=""> ADMIN: {msg.msg}</span> */}
              <Message sentMsg={msg.sentMsg} msg={msg.msg} />
            </div>
          );
        } else {
          return (
            <div
              key={index}
              className="messageFromUser d-flex flex-row justify-content-start"
            >
              {/* <span className=""> USER: {msg.msg}</span> */}
              <Message respuesta={msg.respuesta} msg={msg.msg} />
            </div>
          );
        }
      })}
    </div>
  );
}

export default MessageList;
