import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Dashboard/Shared/Navbar/Navbar";
import Sidebar from "../Dashboard/Shared/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-4 lg:grid-cols-5">
        <div className="col-span-1 bg-red-100 hidden lg:block">
          <Sidebar />
        </div>
        <div className="col-span-4 bg-slate-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
