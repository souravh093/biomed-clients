import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { BiEdit } from "react-icons/bi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  const { data: myProfileData = [] } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await axios(`http://localhost:5000/user/${user?.email}`);
      return res.data;
    },
  });
  
  const { updateData } = myProfileData;



  return (
    <div className="px-10 py-6">
      {/* Heading Section */}
      <div>
        <div>
          <h2 className="text-3xl font-semibold">My Profile!</h2>
          <p className="text-gray-600 text-base py-3">Ready to jump?</p>
        </div>
      </div>
      <button className="text-base text-primary hover:text-green-600 lg:flex items-center gap-2 bg-slate-200 hover:bg-slate-300 duration-500 px-6 py-3 rounded-md mt-6 hidden">
        <HiOutlineMenuAlt3 /> Menu
      </button>

      <div key={myProfileData._id} className="bg-white p-6 rounded-md my-6">
        {/* Image Section */}
        <div className="md:flex justify-between">
          <div className="md:flex gap-6 items-center">
            <div className="mb-3 md:mb-0">
              <img
                className="rounded-full h-32 w-32 mx-auto md:mx-0"
                src={updateData?.image ? updateData?.image : myProfileData?.image}
                alt=""
              />
              <Link to="/dashboard/editProfile">
                <button
                  className="md:hidden flex items-center justify-center gap-1 text-xl cursor-pointer text-primary pt-2 md:mt-0"
                >
                  <BiEdit /> <span>Edit</span>
                </button>
              </Link>
            </div>
            <div className="space-y-3">
              <p className="flex flex-col text-sm">
                Full Name <span className="text-xl">{updateData?.name2 ? updateData?.name2 : myProfileData?.name}</span>
              </p>
              <p className="flex flex-col text-sm">
                Email Address <span className="text-xl">{updateData?.email ? updateData?.email : myProfileData?.email}</span>
              </p>
            </div>
          </div>
          <Link to="/dashboard/editProfile">
            <button
              className="hidden lg:flex items-center justify-center gap-1 text-xl cursor-pointer text-primary pt-2 md:mt-0"
            
            >
              <BiEdit /> <span>Edit</span>
            </button>
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
                  {updateData?.jobTitle ? updateData?.jobTitle : "none"}
                </span>
              </p>
              <p className="flex flex-col text-sm">
                Experience{" "}
                <span className="text-xl">
                  {updateData?.experience ? updateData?.experience : 0}{" "}Years
                </span>
              </p>
              <p className="flex flex-col text-sm">
                Education Levels{" "}
                <span className="text-xl">
                  {updateData?.education ? updateData?.education : "none"}
                </span>
              </p>
              <p className="flex flex-col text-sm">
                Country{" "}
                <span className="text-xl">
                  {updateData?.country ? updateData?.country : "none"}
                </span>
              </p>
              <p className="flex flex-col text-sm">
                City{" "}
                <span className="text-xl">
                  {updateData?.city ? updateData?.city : "none"}
                </span>
              </p>
            </div>
            {/* Right Part */}
            <div className="space-y-3">
              <p className="flex flex-col text-sm">
                Phone{" "}
                <span className="text-xl">
                  {updateData?.phone ? updateData?.phone : 0}
                </span>
              </p>
              <p className="flex flex-col text-sm">
                Age{" "}
                <span className="text-xl">
                  {updateData?.age ? updateData?.age : 0} Years
                </span>
              </p>
              <p className="flex flex-col text-sm">
                Language{" "}
                <span className="text-xl">
                  {updateData?.language ? updateData?.language : "none"}
                </span>
              </p>
              <p className="flex flex-col text-sm">
                Current Salary($){" "}
                <span className="text-xl">
                  {updateData?.currentSalary ? updateData?.currentSalary : 0}
                </span>
              </p>
              <p className="flex flex-col text-sm">
                Expected Salary($){" "}
                <span className="text-xl">
                  {updateData?.expectedSalary ? updateData?.expectedSalary : 0}
                </span>
              </p>
            </div>
          </div>
          {/* Links Part */}
          <div>
            <div>
              <p className="flex flex-col text-sm">Website Link </p>
              <span className="text-xl text-blue-600 hover:underline cursor-pointer">
                {updateData?.website ? updateData?.website : "none"}
              </span>
            </div>
            <div>
              <p className="flex flex-col text-sm">Facebook Link </p>
              <span className="text-xl text-blue-600 hover:underline cursor-pointer">
                {updateData?.facebook ? updateData?.facebook : "none"}
              </span>
            </div>
            <div>
              <p className="flex flex-col text-sm">LinkedIn Link </p>
              <span className="text-xl text-blue-600 hover:underline cursor-pointer">
                {updateData?.linkedin ? updateData?.linkedin : "none"}
              </span>
            </div>
          </div>
          {/* About Me Part */}
          <div className="mt-10">
            <p className="flex flex-col text-xl">
              About Me{" "}
              <span className="text-base text-slate-600">
                {updateData?.description
                  ? updateData?.description
                  : "Nothing Write Yet!"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
