import React from "react";
import { Outlet } from "react-router-dom";
import CommunityLeftSidebar from "../Community/Shared/CommunityLeftSidebar/CommunityLeftSidebar";
import CommunityNavbar from "../Community/Shared/CommunityNavbar/CommunityNavbar";


const CommunityProfile = () => {
  return (
    <>
      <CommunityNavbar />
      <div className="grid grid-cols-7">
        <div className="col-span-2">
          <CommunityLeftSidebar />
        </div>
        <div className="col-span-5">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default CommunityProfile;
