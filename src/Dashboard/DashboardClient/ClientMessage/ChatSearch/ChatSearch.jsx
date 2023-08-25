import React from "react";
import { GrSearch } from "react-icons/gr";
const ChatSearch = () => {
  return (
    <div className="flex  items-center rounded-md">
      <div className=" bg-red-50 p-3">
        <GrSearch />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="bg-red-50 py-2 flex-grow outline-none"
      />
    </div>
  );
};

export default ChatSearch;
