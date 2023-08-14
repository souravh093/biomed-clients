import React from "react";
import Navbar from "../Dashboard/Shared/Navbar/Navbar";
import Sidebar from "../Dashboard/Shared/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-5">
        <div className="col-span-1 bg-red-100">
          <Sidebar />
        </div>
        <div className="col-span-4 bg-red-200">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
