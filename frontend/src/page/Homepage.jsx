import React from "react";
import Header from "../components/header/Header";
import { io } from "socket.io-client";

const Homepage = () => {
  const socketRef = React.useRef();
  const [id, setId] = React.useState(null);
  const [userCount, setUserCount] = React.useState(null);

  React.useEffect(() => {
    socketRef.current = io("localhost:3001") || undefined;

    if (socketRef.current !== undefined) {
      socketRef.current.on("getId", (data) => setId(data));

      socketRef.current.on("newUserJoin", (data) =>
        setUserCount(data.userCount)
      );
      socketRef.current.on("userOut", (data) => setUserCount(data.userCount));
    }
  }, []);

  return (
    <React.Fragment>
      <Header height={50} userCount={userCount} />
    </React.Fragment>
  );
};

export default Homepage;
