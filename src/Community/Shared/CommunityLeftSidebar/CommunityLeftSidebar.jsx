import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BiBriefcase, BiSolidMessageDetail } from "react-icons/bi";
import { MdRssFeed } from "react-icons/md";
import "./CommunityLeftSidebar.css";

const CommunityLeftSidebar = () => {
  return (
    <div className="leftSidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <MdRssFeed className="mr-1 text-2xl" />
            <span>Feed</span>
          </li>
          <li className="sidebarListItem">
            <BiSolidMessageDetail className="mr-1 text-2xl" />
            <span>Chats</span>
          </li>
          <li className="sidebarListItem">
            <BiBriefcase className="mr-1 text-2xl" />
            <span>Jobs</span>
          </li>
          <li className="sidebarListItem">
            <AiOutlineQuestionCircle className="mr-1 text-2xl" />
            <span>Questions</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CommunityLeftSidebar;
