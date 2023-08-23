import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const ProfileDropdown = () => {
  const { user, logoutUser, setCandidateRole, candidateRole, clientRole } =
    useContext(AuthContext);
  const { data: myProfileData = [] } = useQuery({
    queryKey: ["profile", user?.email],
    queryFn: async () => {
      const res = await axios(
        `https://biomed-server.vercel.app/users/${user?.email}`
      );
      return res.data;
    },
  });

  const { updateData } = myProfileData;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  const openDropdown = () => {
    clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  const toggleDropdown = () => {
    if (isDropdownOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  };

  const logoutHandler = () => {
    logoutUser().then(() => {
      setCandidateRole(false);
      navigate("/");
    });
  };


  return (
    <div className="relative inline-block">
      <div
        className="w-12 h-12 rounded-full overflow-hidden cursor-pointer"
        onMouseEnter={toggleDropdown}
        onMouseLeave={toggleDropdown}
      >
        <img
          referrerPolicy="no-referrer"
          src={updateData?.image ? updateData?.image : user?.photoURL}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
          className="absolute top-full right-0 mt-2  bg-white border border-gray-300 shadow-md rounded-md"
        >
          <ul className="py-2">
            <li className="px-4 py-2 ">{user?.displayName}</li>
            <li className="px-4 pt-2 pb-5">{user?.email}</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Edit Profile
            </li>
            {clientRole ? (
              <Link to={"/dashboard/client-home"}>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Dashboard
                </li>
              </Link>
            ) : candidateRole ? (
              <Link to={"/dashboard/candidate-home"}>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Dashboard
                </li>
              </Link>
            ) : (
              <></>
            )}
            <li
              onClick={logoutHandler}
              className="px-4 py-2 hover:bg-red-500 hover:text-gray-100 cursor-pointer"
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
