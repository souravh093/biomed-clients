import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Dashboard/Shared/Navbar/Navbar";
import Sidebar from "../Dashboard/Shared/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-4 lg:grid-cols-5 pt-[94px]">
        <aside className="col-span-1 hidden lg:block ">
          <Sidebar />
        </aside>
        <div className="col-span-4 bg-slate-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
