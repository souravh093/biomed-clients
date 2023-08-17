import React from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import { CiPaperplane } from "react-icons/ci";
import { PiBagSimpleBold } from "react-icons/pi";
import { IoIosPaper } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import { RiMessage2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const ClientMenu = () => {
  return (
    <div className="px-10 py-5 h-screen">
      <ul className="text-xl">
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600">
          <Link
            to={"/dashboard/dashboard-home"}
            className="flex items-center gap-3"
          >
            <AiOutlineHome /> Dashboard
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600">
          <Link className="flex items-center gap-3">
            <AiOutlineUser /> Company Profile
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600">
          <Link to={"/dashboard/post-job"} className="flex items-center gap-3">
            <CiPaperplane /> Post A New Job
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600">
          <Link to='/dashboard/manage-jobs' className="flex items-center gap-3">
            <PiBagSimpleBold /> Manage Jobs
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600">
          <Link className="flex items-center gap-3">
            <IoIosPaper /> All Applications
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600">
          <Link to='/dashboard/shortlisted-resumes' className="flex items-center gap-3">
            <FaRegBookmark /> Shortlisted Resume
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600">
          <Link className="flex items-center gap-3">
            <RiMessage2Line /> Messages
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600">
          <Link className="flex items-center gap-3">
            <AiOutlineLogout /> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ClientMenu;
