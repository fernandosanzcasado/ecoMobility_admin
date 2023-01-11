import React from "react";
import "../App.css";
import Message from "../components/Message";

var chats = [];

export default function MessageView({ hidefunc }) {
  const [primer, Setprimer] = React.useState(true);
  const [socket, setSocket] = React.useState();
  const [message, setMessage] = React.useState("");
  const [messageReceived, setMessageReceived] = React.useState("");
  const [connected, setConnected] = React.useState(false);
  const [chatList, setChatList] = React.useState([]);
  const [animation, setAnimation] = React.useState(true);

  /* React.useEffect(() => {
    if (!connected) {
      setSocket(io("http://192.168.43.233:3000")); //Cambiar ip
      setConnected(true);
    }
  }, []);

  const submitChatMessage = () => {
    if (animation) setAnimation(false);
    chats = [...chats, { msg: message, sentMsg: true }];
    setChatList([...chats].reverse());
    socket.emit("chat message", message);
    setMessage("");
  };

  React.useEffect(() => {
    if (connected) {
      socket.on("Server response", (data) => {
        setMessageReceived(data);
      });
    }
  }, [socket]);

  React.useEffect(() => {
    if (primer) Setprimer(false);
    else {
      console.log("RECIBIDO MI COMPA!!!" + messageReceived);
      chats = [...chats, { msg: messageReceived, respuesta: true }];
      setChatList([...chats].reverse());
      console.log(messageReceived);
    }
  }, [messageReceived]);*/

  return <h1>Message View</h1>;
}

const styles = StyleSheet.create({
  animation: {
    height: 200,
    width: 200,
    alignSelf: "center",
  },
  animcontainer: {
    position: "absolute",
    alignSelf: "center",
  },
  buttontext: {
    color: "#FFFFFF",
  },
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "#F5FCFF",
  },
  message: {
    borderWidth: 0.8,
    borderColor: "grey",
    padding: 6,
    width: "80%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  messagecontainer: {
    flexDirection: "row",
    marginHorizontal: 5,
    marginTop: 5,
  },
  sendbutton: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    textColor: "#FFFFFF",
  },
  text: {
    fontSize: 16,
    alignSelf: "center",
  },
});
