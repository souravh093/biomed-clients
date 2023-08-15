import React, { useContext } from "react";
import { BiEdit } from "react-icons/bi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AuthContext } from "../../Provider/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
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
                src={user.photoURL}
                alt=""
              />
              <div>
                <p className="md:hidden flex items-center justify-center gap-1 text-xl cursor-pointer text-primary pt-2 md:mt-0">
                  <BiEdit /> <span>Edit</span>
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="flex flex-col text-sm">
                Full Name <span className="text-xl">{user.displayName}</span>
              </p>
              <p className="flex flex-col text-sm">
                Email Address <span className="text-xl">{user.email}</span>
              </p>
            </div>
          </div>
          <div>
            <p className="hidden md:flex items-center gap-1 text-xl cursor-pointer text-primary pt-1 md:mt-0">
              <BiEdit /> <span>Edit</span>
            </p>
          </div>
        </div>
        {/* Additional Info */}
        <div className="py-10 md:flex items-center justify-around">
          {/* Left Part */}
          <div className="space-y-3 mb-3">
            <p className="flex flex-col text-sm">
              Phone{" "}
              <span className="text-xl">{user.phone ? user.phone : 0}</span>
            </p>
            <p className="flex flex-col text-sm">
              Website{" "}
              <span className="text-xl">
                {user.website ? user.website : "none"}
              </span>
            </p>
          </div>

          {/* Right Part */}
          <div className="space-y-3">
            <p className="flex flex-col text-sm">
              Age <span className="text-xl">{user.age ? user.age : 0}</span>
            </p>
            <p className="flex flex-col text-sm">
              Language{" "}
              <span className="text-xl">
                {user.language ? user.language : "none"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
