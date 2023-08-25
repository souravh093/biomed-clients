import React from "react";
import DashboardTitle from "../../../components/DashboardTitle/DashboardTitle";
import UserSidebar from "./UserSidebar/UserSidebar";
import Chat from "./Chat/Chat";

const ClientMessage = () => {




  return (
    <div className="min-h-screen p-6">
      <DashboardTitle title={"Message!"} slogan={"Ready to jump back in?"} />
      <div className="">
        <div className="flex bg-[#ededed] h-[100vh] shadow-lg ">
          <div className="w-[30%]">
            <UserSidebar />
          </div>
          <div className="w-[70%]">
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientMessage;
