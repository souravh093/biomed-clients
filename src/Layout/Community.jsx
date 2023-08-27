import React from "react";
import { Outlet } from "react-router-dom";
import CommunityLeftSidebar from "../Community/Shared/CommunityLeftSidebar/CommunityLeftSidebar";
import CommunityNavbar from "../Community/Shared/CommunityNavbar/CommunityNavbar";
import CommunityRightSidebar from "../Community/Shared/CommunityRightSidebar/CommunityRightSidebar";

const Community = () => {
  return (
    <>
      <CommunityNavbar />
      <div className="grid grid-cols-7">
        <div className="col-span-2 bg-yellow-200">
          <CommunityLeftSidebar />
        </div>
        <div className="col-span-3 bg-orange-200">
          <Outlet />
        </div>
        <div  className="col-span-2 bg-green-200">
          <CommunityRightSidebar />
        </div>
      </div>
    </>
  );
};

export default Community;
