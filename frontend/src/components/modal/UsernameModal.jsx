import React from "react";
import ReactDOM from "react-dom";

const UsernameModal = ({ open = false, getUsernameToApp = () => {} }) => {
  if (typeof document === "undefined") return <div className="modal" />;

  const usernameRef = React.useRef(null);

  return ReactDOM.createPortal(
    <div
      id="username-modal"
      className={`fixed inset-0 w-full h-full flex items-center justify-center transition-all z-50 p-5 ${
        open ? "" : "opacity-0 invisible"
      }`}
    >
      <div className="overlay absolute inset-0 bg-black bg-opacity-25" />
      <div className="overlay-content max-w-[500px] bg-white relative z-10 p-10 rounded-lg w-full flex flex-col gap-y-3 shadow-md">
        <h2 className="font-medium text-2xl text-center">Welcome back!</h2>
        <label
          htmlFor="username"
          className="font-semibold text-md cursor-pointer"
        >
          Username:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="p-4 border border-black rounded-lg font-semibold w-full leading-normal focus:border-blue-500 focus:scale-105 transition-all shadow-md"
          placeholder="Xin mời nhập username"
          ref={usernameRef}
        />
        <button
          className="p-4 bg-blue-500 rounded-lg text-white mt-2 font-semibold hover:bg-blue-300 active:scale-90 transition-all shadow-md"
          onClick={() => getUsernameToApp(usernameRef.current.value)}
        >
          Xác nhận
        </button>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default UsernameModal;
