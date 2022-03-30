import React from "react";

const ChatMessage = ({ text, isCurrentUser, username, ...props }) => {
  return (
    <div
      className={`w-full mt-3 mb-3 flex ${
        isCurrentUser ? "justify-end pr-3 pl-3" : "justify-start pr-3 pl-3"
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

export default ChatMessage;
