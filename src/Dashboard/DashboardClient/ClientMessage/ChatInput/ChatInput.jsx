import React from "react";

const ChatInput = () => {
  return (
    <div className="border-t-2 flex items-center justify-between">
      <input
        type="text"
        placeholder="Type a message"
        className="flex-grow p-5 outline-none"
      />

      <div>
        <button type="submit" className="bg-primary hover:bg-hover text-gray-50 py-5 px-16">Send</button>
      </div>
    </div>
  );
};

export default ChatInput;
