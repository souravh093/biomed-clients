import React from "react";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Avatar } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import SidebarChat from "../SidebarChat/SidebarChat";
const UserSidebar = () => {
  return (
    <div>
      <div className="flex flex-col flex-[0.35]">
        <div className="flex justify-between p-5 border-r-2 ">
          <Avatar />
          <div className="flex items-center justify-between min-w-[10vh] mr-2-[vw]">
            <IconButton>
              <DonutLargeIcon></DonutLargeIcon>
            </IconButton>
            <IconButton>
              <ChatIcon></ChatIcon>
            </IconButton>
            <IconButton>
              <MoreVertIcon></MoreVertIcon>
            </IconButton>
          </div>
        </div>
      </div>

     <div className="flex items-center bg-[#f6f6f6] h-[39px] p-3">
     <div className="flex items-center bg-white w-[100%] h-[35px] rounded-2xl">
        <SearchOutlined className="text-[gray] p-1"></SearchOutlined>
        <input type="text" placeholder="Search or start new chat" className="border-none ml-[10px] outline-none w-[100%]"/>
      </div>
     </div>


     <div className="flex-1 bg-white mt-2 rounded-md h-[520px]"> 
        <SidebarChat></SidebarChat>
        <SidebarChat></SidebarChat>
        <SidebarChat></SidebarChat>
     </div>
      
    </div>
  );
};

export default UserSidebar;
