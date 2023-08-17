import React, { useContext } from "react";
import { AiOutlineHome, AiOutlineLogout, AiOutlineUser } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { PiBagSimpleBold } from "react-icons/pi";
import { RiMessage2Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const CandidateMenu = () => {
  const { logoutUser, setCandidate } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logoutUser().then(() => {
      setCandidate(false);
      navigate("/");
    });
  };
  return (
    <div className="px-10 py-5 h-screen">
      <ul className="text-xl">
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600">
          <Link
            to={"/dashboard/candidate-home"}
            className="flex items-center gap-3"
          >
            <AiOutlineHome /> Dashboard
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600">
          <Link
            to={"/dashboard/my-profile"}
            className="flex items-center gap-3"
          >
            <AiOutlineUser /> My Profile
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600">
          <Link
            to="/dashboard/applied-jobs"
            className="flex items-center gap-3"
          >
            <PiBagSimpleBold /> Applied Jobs
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600">
          <Link className="flex items-center gap-3">
            <IoIosPaper /> All Applications
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600">
          <Link
            to="/dashboard/shortlisted-jobs"
            className="flex items-center gap-3"
          >
            <FaRegBookmark /> Shortlisted Jobs
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600">
          <Link className="flex items-center gap-3">
            <RiMessage2Line /> Messages
          </Link>
        </li>
        <li
          onClick={handleLogout}
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

export default CandidateMenu;
