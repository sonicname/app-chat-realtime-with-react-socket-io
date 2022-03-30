import React from "react";

const Header = ({ height = 50, userCount = 1, ...props }) => {
  return (
    <div
      className={`w-full bg-black flex justify-center`}
      style={{
        height: height,
      }}
    >
      <div className="max-w-[1120px] w-full mx-auto flex justify-between items-center p-4">
        <h2 className="text-white font-bold leading-relaxed uppercase">
          App chat realtime <span className="text-violet-500">v2</span>
        </h2>
        <span className="text-white font-semibold text-green-400">
          User Online: {userCount || null}
        </span>
      </div>
    </div>
  );
};

export default Header;
