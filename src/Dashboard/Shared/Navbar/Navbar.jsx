import React from 'react';
import { IoMdNotificationsOutline } from "react-icons/io";
import MenuItem from "../../../Pages/Shared/Header/MenuItem/MenuItem";
import logo from "../../../assets/logo.png";
import ProfileDropdown from "../../../components/ProfileDropdown/ProfileDropdown";

const Navbar = () => {
  return (
    <nav className="px-20 py-5 flex items-center justify-between shadow-md fixed w-full bg-white ">
      <div className="flex items-center gap-10">
        <img src={logo} alt="" />
        <ul>
          <MenuItem name={"Home"} path={"/"} />
        </ul>
      </div>
      <div className="flex items-center gap-10">
        <div className="relative">
          <IoMdNotificationsOutline className="text-2xl font-bold" />
          <span className="absolute bottom-3 -right-2 text-gray-100 z-10 bg-[#4bd674] p-1 w-5 h-5 rounded-full flex items-center justify-center">
            0
          </span>
        </div>
        <ProfileDropdown />
      </div>
    </nav>
  );
};

export default Navbar;
