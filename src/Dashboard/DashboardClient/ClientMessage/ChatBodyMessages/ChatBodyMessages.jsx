import React from "react";
import ChatMessage from "../ChatMessage/ChatMessage";

const ChatBodyMessages = () => {
  return (
    <div className="px-5 dark:bg-gray-800 dark:text-white min-h-[calc(100%-184px)]">
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
    </div>
  );
};

export default ChatBodyMessages;
