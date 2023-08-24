import React from "react";

const ChatInput = () => {
  return (
    <div className="border-t-2 dark:bg-gray-800 dark:text-white flex items-center justify-between">
      <input
        type="text"
        placeholder="Type a message"
        className="flex-grow p-5 dark:bg-gray-700 outline-none"
      />

      <div>
        <button type="submit" className="bg-primary hover:bg-hover dark:bg-gray-800  text-gray-50 py-5 px-16">Send</button>
      </div>
    </div>
  );
};

export default ChatInput;
