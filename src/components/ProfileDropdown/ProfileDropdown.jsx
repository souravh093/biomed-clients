import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useRef } from "react";
import avatar from "../../assets/placeholder.jpg";
import { Link, useNavigate } from "react-router-dom";

const ProfileDropdown = () => {
  const { user, logoutUser, setCandidateRole } = useContext(AuthContext);
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
      navigate("/")
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
          src={user && user.photoURL ? user.photoURL : avatar}
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
            <Link to={"/dashboard"}>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Dashboard
              </li>
            </Link>
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
