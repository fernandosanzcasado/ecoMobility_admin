import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

import Message from "../components/Message";
import "./Chat.css";

var chats = [];

export default function MessageList() {
  const [messages, setMessages] = useState([
    {
      sentMsg: true,
      msg: "ALAAA ALAAAAAAAAAAAAAAAAAAAAAAaaajash dg jas dasd asty dsatyf dsa dtyasd fyj",
    },
    {
      respuesta: true,
      msg: "DIAMANTE PAL FREEEEEEEEEEEEEEEEEEEEEEEEE quepasaaaaaaaaaa",
    },
  ]);
  const [message, setMessage] = useState("");

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

  function handleSubmit() {
    if (!message) return;
    chats = [...chats, { msg: message, sentMsg: true }];
    setMessages([...chats]);
    //socket.emit("chat message", message);
    setMessage("");
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") handleSubmit();
  };

  return (
    <div className="container d-flex flex-row">
      <div className="container d-flex flex-column">
        <div className="scrollable-chat">
          {messages.map((msg, index) => (
            <Message
              respuesta={msg.respuesta}
              sentMsg={msg.sentMsg}
              msg={msg.msg}
              index={index}
            />
          ))}
        </div>
        <div className="d-flex flex-row justify-content-center align-items-center col-12">
          <input
            className="form-box col-9"
            type="text"
            value={message}
            placeholder="Write here"
            onChange={(m) => setMessage(m.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            type="button"
            className="btn-secondary btn-lg form-button col-2"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      </div>
      <div className="container d-flex flex-column">
        <h1>HOLA BUENAS</h1>
      </div>
    </div>
  );
}
