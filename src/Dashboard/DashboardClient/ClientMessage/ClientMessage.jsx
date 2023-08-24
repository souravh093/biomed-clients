import React from "react";
import DashboardTitle from "../../../components/DashboardTitle/DashboardTitle";
import ChatSidebar from "./ChatSidebar/ChatSidebar";
import ChatNavbar from "./ChatNavbar/ChatNavbar";
import ChatBodyMessages from "./ChatBodyMessages/ChatBodyMessages";
import ChatInput from "./ChatInput/ChatInput";

const ClientMessage = () => {
  return (
    <div className="min-h-screen p-6">
      <DashboardTitle title={"Message!"} slogan={"Ready to jump back in?"} />
      <div className="bg-white">
        <div className="w-full grid grid-cols-3 min-h-[calc(100vh-150px)]">
          <div className="col-span-1 border-r">
            <ChatSidebar />
          </div>
          <div className="col-span-2">
            <ChatNavbar />
            <ChatBodyMessages />
            <ChatInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientMessage;
