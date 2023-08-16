import React from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import { PiBagSimpleBold } from "react-icons/pi";
import { IoIosPaper } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import { RiMessage2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const CandidateMenu = () => {
  return (
    <div className="px-10 py-5 h-screen ">
      <ul className="text-xl">
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600">
          <Link className="flex items-center gap-3">
            <AiOutlineHome /> Dashboard
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600">
          <Link className="flex items-center gap-3">
            <AiOutlineUser /> My Profile
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600">
          <Link to='/dashboard/applied-jobs' className="flex items-center gap-3">
            <PiBagSimpleBold /> Applied Jobs
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600">
          <Link className="flex items-center gap-3">
            <IoIosPaper /> All Applications
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600">
          <Link to='/dashboard/shortlisted-jobs' className="flex items-center gap-3">
            <FaRegBookmark /> Shortlisted Jobs
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

export default CandidateMenu;