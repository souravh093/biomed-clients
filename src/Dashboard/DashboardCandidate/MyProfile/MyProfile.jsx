import React, { useContext } from "react";
import { BiEdit } from "react-icons/bi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const {displayName, email, photoURL} = user;
  return (
    <div className="px-10 py-6">
      {/* Heading Section */}
      <div>
        <div>
          <h2 className="text-3xl font-semibold">My Profile!</h2>
          <p className="text-gray-600 text-base py-3">Ready to jump?</p>
        </div>
      </div>
      <button className="text-base text-primary hover:text-green-600 flex items-center gap-2 bg-slate-200 hover:bg-slate-300 duration-500 px-6 py-3 rounded-md mt-6 lg:hidden">
        <HiOutlineMenuAlt3 /> Menu
      </button>
      <div className="bg-white p-6 rounded-md my-6">
        {/* Image Section */}
        <div className="md:flex justify-between">
          <div className="md:flex gap-6 items-center">
            <div className="mb-3 md:mb-0">
              <img
                className="rounded-full h-32 w-32 mx-auto md:mx-0"
                src={photoURL}
                alt=""
              />
              <Link to="/editProfile">
                <p className="md:hidden flex items-center justify-center gap-1 text-xl cursor-pointer text-primary pt-2 md:mt-0">
                  <BiEdit /> <span>Edit</span>
                </p>
              </Link>
            </div>
            <div className="space-y-3">
              <p className="flex flex-col text-sm">
                Full Name <span className="text-xl">{displayName}</span>
              </p>
              <p className="flex flex-col text-sm">
                Email Address <span className="text-xl">{email}</span>
              </p>
            </div>
          </div>
          <Link to="/editProfile">
            <p className="hidden md:flex items-center gap-1 text-xl cursor-pointer text-primary pt-1 md:mt-0">
              <BiEdit /> <span>Edit</span>
            </p>
          </Link>
        </div>
        {/* Additional Info */}
        <div className="mx-0 md:mx-10 xl:mx-24">
          <div className="py-10 md:flex items-center justify-between">
            {/* Left Part */}
            <div className="space-y-3 mb-3">
              <p className="flex flex-col text-sm">
                Job Title{" "}
                <span className="text-xl">
                  {user.jobTitle ? user.jobTitle : "none"}
                </span>
              </p>
              <p className="flex flex-col text-sm">
                Experience{" "}
                <span className="text-xl">
                  {user.experience ? user.experience : 0} Years
                </span>
              </p>
              <p className="flex flex-col text-sm">
                Education Levels{" "}
                <span className="text-xl">
                  {user.education ? user.education : "none"}
                </span>
              </p>
              <p className="flex flex-col text-sm">
                Country{" "}
                <span className="text-xl">
                  {user.country ? user.country : "none"}
                </span>
              </p>
              <p className="flex flex-col text-sm">
                City{" "}
                <span className="text-xl">
                  {user.city ? user.city : "none"}
                </span>
              </p>
            </div>
            {/* Right Part */}
            <div className="space-y-3">
              <p className="flex flex-col text-sm">
                Phone{" "}
                <span className="text-xl">{user.phone ? user.phone : 0}</span>
              </p>
              <p className="flex flex-col text-sm">
                Age{" "}
                <span className="text-xl">{user.age ? user.age : 0} Years</span>
              </p>
              <p className="flex flex-col text-sm">
                Language{" "}
                <span className="text-xl">
                  {user.language ? user.language : "none"}
                </span>
              </p>
              <p className="flex flex-col text-sm">
                Current Salary($){" "}
                <span className="text-xl">
                  {user.currentSalary ? user.currentSalary : 0}
                </span>
              </p>
              <p className="flex flex-col text-sm">
                Expected Salary($){" "}
                <span className="text-xl">
                  {user.expectedSalary ? user.expectedSalary : 0}
                </span>
              </p>
            </div>
          </div>
          {/* Links Part */}
          <div>
            <p className="flex flex-col text-sm">
              Website Link{" "}
              <span className="text-xl text-blue-600 hover:underline cursor-pointer">
                {user.website ? user.website : "none"}
              </span>
            </p>
            <p className="flex flex-col text-sm">
              Facebook Link{" "}
              <span className="text-xl text-blue-600 hover:underline cursor-pointer">
                {user.facebook ? user.facebook : "none"}
              </span>
            </p>
            <p className="flex flex-col text-sm">
              LinkedIn Link{" "}
              <span className="text-xl text-blue-600 hover:underline cursor-pointer">
                {user.linkedin ? user.linkedin : "none"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
