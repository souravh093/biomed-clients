import React from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineLogout,
  AiOutlineClose,
} from "react-icons/ai";
import { CiPaperplane } from "react-icons/ci";
import { PiBagSimpleBold } from "react-icons/pi";
import { IoIosPaper } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import { RiMessage2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const ClientMenu = () => {
  const { logoutUser, setDashboardToggle } = useContext(AuthContext);
  return (
    <div className="px-10 py-5 h-screen z-20 bg-white">
      <div className="flex justify-end lg:hidden ">
        <button
          className="bg-primary p-2 rounded-full text-white hover:bg-hover mb-3"
          onClick={() => setDashboardToggle(false)}
        >
          <AiOutlineClose />
        </button>
      </div>
      <ul className="text-xl">
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600">
          <Link
            onClick={() => setDashboardToggle(false)}
            to={"/dashboard/dashboard-home"}
            className="flex items-center gap-3"
          >
            <AiOutlineHome /> Dashboard
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600">
          <Link
            to={"/dashboard/company-profile"}
            className="flex items-center gap-3"
          >
            <AiOutlineUser /> Company Profile
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600">
          <Link
            onClick={() => setDashboardToggle(false)}
            to={"/dashboard/post-job"}
            className="flex items-center gap-3"
          >
            <CiPaperplane /> Post A New Job
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600">
          <Link className="flex items-center gap-3">
            <PiBagSimpleBold /> Manage Jobs
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600">
          <Link className="flex items-center gap-3">
            <IoIosPaper /> All Applications
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600">
          <Link className="flex items-center gap-3">
            <FaRegBookmark /> Shortlisted Resume
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600">
          <Link className="flex items-center gap-3">
            <RiMessage2Line /> Messages
          </Link>
        </li>
        <li
          onClick={() => logoutUser()}
          className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600"
        >
          <Link className="flex items-center gap-3">
            <AiOutlineLogout /> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ClientMenu;
