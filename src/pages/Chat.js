import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

function MessageList() {
  const [messages, setMessages] = useState([
    { from: "admin", text: "hola" },
    { from: "user", text: "hola2" },
    { from: "user", text: "askdgaskdghk" },
    { from: "admin", text: "diamante pal free" },
  ]); // state to store messages

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
        if (msg.from === "admin") {
          return (
            <div
              key={index}
              className="messageFromAdmin d-flex flex-row justify-content-end"
            >
              <span className=""> ADMIN: {msg.text}</span>
            </div>
          );
        } else {
          return (
            <div
              key={index}
              className="messageFromUser d-flex flex-row justify-content-start"
            >
              <span className=""> USER: {msg.text}</span>
            </div>
          );
        }
      })}
    </div>
  );
}

export default MessageList;
