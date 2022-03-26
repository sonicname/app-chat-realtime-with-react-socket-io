import React from "react";
import { io } from "socket.io-client";

const App = () => {
  React.useEffect(() => {
    const socket = io("http://localhost:3001");
  }, []);

  return (
    <div className={"max-w-[800px] mx-auto"}>
      <div className={"flex flex-col"}>
        <span>User</span>
      </div>
    </div>
  );
};

export default App;
