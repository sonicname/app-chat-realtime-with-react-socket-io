import React from "react";
import { io } from "socket.io-client";
import Header from "./components/Header";
import FormChat from "./components/FormChat";

const App = () => {
  const [username, setUsername] = React.useState("");
  const [count, setCount] = React.useState(0);
  const [message, setMessage] = React.useState("");
  const socket = React.useRef();

  React.useEffect(() => {
    socket.current = io("localhost:3001") || undefined;

    socket.current.on("getId", (data) => {
      setUsername(data);
    });

    socket.current.on("newUserJoin", (data) => {
      setCount(data.userCount);
    });

    socket.current.on("userOut", (data) => {
      setCount(data.userCount);
    });

    socket.current.on("sendMessageFromServer", (data) => {
      setMessage((message) => [...message, data.data]);
    });

    return () => {
      socket.current.disconnect();
    };
  }, []);

  return (
    <div className={"w-full h-[100vh] max-h-[100vh] flex flex-col"}>
      <Header />
      <FormChat
        socket={socket}
        username={username}
        count={count}
        listMessage={message}
      />
    </div>
  );
};

export default App;
