import { Avatar, IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
import React from "react";

const Chat = () => {
  return (
    <div className="flex flex-col flex-[0.65]">
      <div className="p-[20px] flex items-center border-b-2 border-[lightgray]">
        <Avatar></Avatar>
        <div className="flex-1 pl-5">
          <h3 className="font-semibold">Room name</h3>
          <p className="">Last seen at...</p>
        </div>

        <div>
          <IconButton>
            <SearchOutlinedIcon></SearchOutlinedIcon>
          </IconButton>
          <IconButton>
            <AttachFileIcon></AttachFileIcon>
          </IconButton>
          <IconButton>
            <MoreVertIcon></MoreVertIcon>
          </IconButton>
        </div>
      </div>

      <div className="flex-1 p-[30px] h-[500px]">
        <p className="relative text-base p-[10px] w-fit bg-white mb-7 rounded-xl">
          <span className="absolute -top-[15px] font-extrabold text-xs">
            Room name
          </span>
          This is a messaeg
          <span className="ml-[10px] text-[10px]">
            {new Date().toLocaleString()}
          </span>
        </p>

        <p className="relative text-base p-[10px] w-fit bg-[#dcf8c6] ml-auto mb-7 rounded-xl">
          <span className="absolute -top-[15px] font-extrabold text-xs">
            Room name
          </span>
          This is a messaeg
          <span className="ml-[10px] text-[10px]">
            {new Date().toLocaleString()}
          </span>
        </p>
        <p className="relative text-base p-[10px] w-fit bg-white mb-7 rounded-xl">
          <span className="absolute -top-[15px] font-extrabold text-xs">
            Room name
          </span>
          This is a messaeg
          <span className="ml-[10px] text-[10px]">
            {new Date().toLocaleString()}
          </span>
        </p>

        <p className="relative text-base p-[10px] w-fit bg-[#dcf8c6] ml-auto mb-7 rounded-xl">
          <span className="absolute -top-[15px] font-extrabold text-xs">
            Room name
          </span>
          This is a messaeg
          <span className="ml-[10px] text-[10px]">
            {new Date().toLocaleString()}
          </span>
        </p>
        <p className="relative text-base p-[10px] w-fit bg-white mb-7 rounded-xl">
          <span className="absolute -top-[15px] font-extrabold text-xs">
            Room name
          </span>
          This is a messaeg
          <span className="ml-[10px] text-[10px]">
            {new Date().toLocaleString()}
          </span>
        </p>

        <p className="relative text-base p-[10px] w-fit bg-[#dcf8c6] ml-auto mb-7 rounded-xl">
          <span className="absolute -top-[15px] font-extrabold text-xs">
            Room name
          </span>
          This is a messaeg
          <span className="ml-[10px] text-[10px]">
            {new Date().toLocaleString()}
          </span>
        </p>


      </div>

    <div className="flex justify-between items-center h-[62px] border-b-2 border-[lightgray]">
      <InsertEmoticonIcon className=" mx-2 text-[gray]"></InsertEmoticonIcon>
      <form className="flex-1 flex">
        <input type="text" placeholder="Type a message" className="flex-1 rounded-[30px] p-[10px] border-none"/>
        <button type="submit" className="hidden">Send a message</button>
      </form>
      <MicIcon></MicIcon>
    </div>


    </div>
  );
};

export default Chat;
