import React from "react";
import UsernameModal from "./components/modal/UsernameModal";
import Homepage from "./page/Homepage";

const App = () => {
  const [username, setUsername] = React.useState(null);
  const [showModal, setShowModal] = React.useState(true);

  const handleConfirmUsername = (name) => {
    setUsername(name);
  };

  return (
    <React.Fragment>
      <Homepage />
      {!username && (
        <UsernameModal
          open={showModal}
          getUsernameToApp={handleConfirmUsername}
        />
      )}
    </React.Fragment>
  );
};

export default App;
