import React, { useContext } from "react";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import DashboardTitle from "../../../components/DashboardTitle/DashboardTitle";

const MyProfile = () => {
  const { myProfileData } = useContext(AuthContext);
  console.log(myProfileData);

  const { updateData } = myProfileData;

  return (
    <div className="px-10 py-6">
      {/* Title Section */}
      <DashboardTitle title={"My Profile!"} slogan={"Ready to jump?"} />

      <div
        key={myProfileData._id}
        className="bg-white dark:bg-gray-800 dark:text-white p-6 rounded-md my-6"
      >
        {/* Image Section */}
        <div className="md:flex justify-between">
          <div className="md:flex gap-6 items-center">
            <div className="mb-3 md:mb-0">
              <img
                className="rounded-full h-32 w-32 mx-auto md:mx-0"
                src={
                  updateData?.image ? updateData?.image : myProfileData?.image
                }
                alt=""
              />
              <Link to="/dashboard/editProfile">
                <p className="lg:hidden flex items-center justify-center gap-1 text-xl cursor-pointer text-primary pt-2 md:mt-0">
                  <BiEdit /> <span>Edit</span>
                </p>
              </Link>
            </div>
            <div className="space-y-3">
              <p className="flex flex-col text-sm">
                Full Name{" "}
                <span className="text-xl">
                  {updateData?.name2 ? updateData?.name2 : myProfileData?.name}
                </span>
              </p>
              <p className="flex flex-col text-sm">
                Email Address{" "}
                <span className="text-xl">
                  {updateData?.email ? updateData?.email : myProfileData?.email}
                </span>
              </p>
            </div>
          </div>
          <Link to="/dashboard/editProfile">
            <button className="hidden lg:flex items-center justify-center gap-1 text-xl cursor-pointer text-primary pt-2 md:mt-0">
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
