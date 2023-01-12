import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

import Message from "../components/Message";
import "./Chat.css";
import socketService from "../utils/SocketService";

var chats = [];

export default function MessageList() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const [socket, setSocket] = useState();
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    socketService.on("admin_back", (backMessage) => {
      console.log(backMessage);
      setMessageReceived(backMessage);
    });
  }, []);

  useEffect(() => {
    console.log("entro");
    if (!messageReceived) return;
    chats = [...chats, { msg: messageReceived, respuesta: true }];
    setMessages([...chats]);
  }, [messageReceived]);

  function handleSubmit() {
    if (!message) return;
    chats = [...chats, { msg: message, sentMsg: true }];
    setMessages([...chats]);
    socketService.emit("admin_back", message);
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
        <div className="d-flex flex-row justify-content-center align-items-center col-12 m-2">
          <input
            className="form-box mb-0 col-9"
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
