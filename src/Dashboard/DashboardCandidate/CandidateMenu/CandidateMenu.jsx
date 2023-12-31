import React, { useContext } from "react";
import {
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineLogout,
  AiOutlineUser,
  AiOutlineUnorderedList,
  AiOutlineInfoCircle,
  AiOutlineCheckCircle,
  AiOutlineHistory
} from "react-icons/ai";

import { PiBagSimpleBold } from "react-icons/pi";
import { RiMessage2Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const CandidateMenu = () => {
  const { logoutUser, setCandidate, setDashboardToggle } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logoutUser().then(() => {
      navigate("/");
      setCandidate(false);
    });
  };
  return (
    <div className="px-10 py-5 dark:bg-gray-900 h-screen z-50 bg-white">
      <div className="flex justify-end lg:hidden ">
        <button
          className="bg-primary p-2 rounded-full  hover:bg-hover mb-3"
          onClick={() => setDashboardToggle(false)}
        >
          <AiOutlineClose />
        </button>
      </div>
      <ul className="text-xl">
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md dark:text-white text-gray-600">
          <Link
            onClick={() => setDashboardToggle(false)}
            to={"/dashboard/candidate-home"}
            className="flex items-center gap-3"
          >
            <AiOutlineHome /> Dashboard
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md dark:text-white text-gray-600">
          <Link
            onClick={() => setDashboardToggle(false)}
            to={"/dashboard/my-profile"}
            className="flex items-center gap-3"
          >
            <AiOutlineUser /> My Profile
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md dark:text-white text-gray-600">
          <Link
            onClick={() => setDashboardToggle(false)}
            to="/dashboard/applied-tasks"
            className="flex items-center gap-3"
          >
            <PiBagSimpleBold /> Applied Tasks
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md dark:text-white text-gray-600">
          <Link
            onClick={() => setDashboardToggle(false)}
            to="/dashboard/task-overview"
            className="flex items-center gap-3"
          >
            <AiOutlineUnorderedList /> Task Overview
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md dark:text-white text-gray-600">
          <Link
            onClick={() => setDashboardToggle(false)}
            to="/dashboard/task-details"
            className="flex items-center gap-3"
          >
            <AiOutlineInfoCircle /> Task Details
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md dark:text-white text-gray-600">
          <Link
            onClick={() => setDashboardToggle(false)}
            to="/dashboard/task-submission"
            className="flex items-center gap-3"
          >
            <AiOutlineCheckCircle /> Task Submission
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md dark:text-white text-gray-600">
          <Link
            onClick={() => setDashboardToggle(false)}
            to="/dashboard/task-history"
            className="flex items-center gap-3"
          >
            <AiOutlineHistory /> Task History
          </Link>
        </li>



        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md dark:text-white text-gray-600">

          <Link
            onClick={() => setDashboardToggle(false)}
            className="flex items-center gap-3"
          >
            <RiMessage2Line /> Messages
          </Link>
        </li>
        <li
          onClick={handleLogout}
          className="hover:bg-red-400 transition py-5 px-3 rounded-md dark:text-white text-gray-600"
        >
          <Link className="flex items-center gap-3">
            <AiOutlineLogout /> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CandidateMenu;
