import React from "react";

const FormChat = ({ username, socket, count, listMessage, ...props }) => {
  const nodeRef = React.useRef(null);
  const messageRef = React.useRef(null);

  React.useEffect(() => {
    document.onreadystatechange = () => {
      nodeRef.current.style.maxHeight = `${nodeRef.current.clientHeight}px`;
    };
  }, []);

  return (
    <div className="p-4 flex-1 flex flex-col gap-4">
      <div
        id="chat"
        className="w-full flex-1 flex flex-col border border-black rounded-lg p-4 bg-white shadow-md"
      >
        <p className="font-semibold text-black mb-3">
          <span>
            Chào <span className="text-red-400">{username}</span> đến với box
            chat!{" "}
          </span>
          Số người đang hoạt động:{" "}
          <span className="text-green-400">{count}</span> người
        </p>
        <div
          id="chat-box"
          ref={nodeRef}
          className="flex flex-col flex-1 overflow-y-scroll"
        >
          {listMessage.length > 0 &&
            listMessage.map((item, index) => (
              <ChatMessage
                key={index}
                text={item.message}
                isCurrentUser={username === item.username}
                username={item.username}
              />
            ))}
        </div>
      </div>
      <div className="w-full h-auto">
        <div className="flex gap-x-3">
          <input
            className="p-4 w-full border border-black rounded-lg shadow-md"
            type="text"
            placeholder="Nhập tin nhắn bạn muốn gửi"
            ref={messageRef}
          />
          <button
            className="p-4 bg-blue-500 rounded-lg text-white font-semibold shadow-md"
            onClick={(e) => {
              if (messageRef.current.value !== "") {
                socket.current.emit("sendMessageFromClient", {
                  username,
                  message: messageRef.current.value,
                });
                messageRef.current.value = "";
              }
            }}
          >
            Gửi
          </button>
        </div>
      </div>
    </div>
  );
};

const ChatMessage = ({ text, isCurrentUser, username, ...props }) => {
  return (
    <div
      className={`w-full mt-3 mb-3 flex ${
        isCurrentUser ? "justify-end pr-3" : "justify-start pl-3"
      }`}
    >
      <div
        className={`p-4 ${
          isCurrentUser ? "bg-blue-500" : "bg-gray-300"
        } rounded-lg`}
      >
        <p
          className={`${
            isCurrentUser ? "text-white" : "text-black"
          } font-semibold`}
        >
          {!isCurrentUser && (
            <span className="text-violet-500">{`${username}: `}</span>
          )}
          {text}
        </p>
      </div>
    </div>
  );
};

export default FormChat;
