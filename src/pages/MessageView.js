import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

function MessageList() {
  const [messages, setMessages] = useState([]); // state to store messages

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
    <div>
      {messages.map((msg, index) => (
        <div key={index} className="message">
          {msg}
        </div>
      ))}
    </div>
  );
}

export default MessageList;
