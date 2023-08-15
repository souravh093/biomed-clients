import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <ul>
        <Link to={"/dashboard/dashboard-home"}>
          <li>Dashboard Home</li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
