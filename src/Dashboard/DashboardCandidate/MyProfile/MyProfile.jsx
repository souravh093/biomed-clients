import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { BiEdit } from "react-icons/bi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AuthContext } from "../../../Provider/AuthProvider";
import EditForm from "./EditForm/EditForm";

const MyProfile = () => {
  const [control, setControl] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const { user } = useContext(AuthContext);

  const { data: myProfileData = [] } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await axios(`http://localhost:5000/users/${user?.email}`);
      return res.data;
    },
  });
  console.log(myProfileData.email);

  // update profile functionality
  const handleUpdateProfileData = (profileData) => {
    axios
      .patch(
        `http://localhost:5000/updateProfile/${profileData?._id}`,
        profileData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const result = response.data;
        console.log(result);

        if (result.modifiedCount > 0) {
          setControl(!control);
        }

        toast.success("Profile updated successfully");
        closeModal();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to update Profile. Please try again.");
      });
  };

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
                src={myProfileData.image}
                alt=""
              />
              <button
                className="md:hidden flex items-center justify-center gap-1 text-xl cursor-pointer text-primary pt-2 md:mt-0"
                onClick={() => setShowEditForm(true)}
              >
                <BiEdit /> <span>Edit</span>
              </button>
            </div>
            <div className="space-y-3">
              <p className="flex flex-col text-sm">
                Full Name <span className="text-xl">{myProfileData.name}</span>
              </p>
              <p className="flex flex-col text-sm">
                Email Address{" "}
                <span className="text-xl">{myProfileData.email}</span>
              </p>
            </div>
          </div>
          <button
            className="hidden lg:flex items-center justify-center gap-1 text-xl cursor-pointer text-primary pt-2 md:mt-0"
            onClick={() => setShowEditForm(true)}
          >
            <BiEdit /> <span>Edit</span>
          </button>
        </div>
        {/* Additional Info */}
        <div className="mx-0 md:mx-10 xl:mx-24">
          <div className="py-10 md:flex items-center justify-between">
            {/* Left Part */}
            <div className="space-y-3 mb-3">
              <p className="flex flex-col text-sm">
                Job Title{" "}
                <span className="text-xl">
                  {myProfileData.jobTitle ? myProfileData.jobTitle : "none"}
                </span>
              </p>
              <p className="flex flex-col text-sm">
                Experience{" "}
                <span className="text-xl">
                  {myProfileData.experience ? myProfileData.experience : 0}{" "}
                  Years
                </span>
              </p>
              <p className="flex flex-col text-sm">
                Education Levels{" "}
                <span className="text-xl">
                  {myProfileData.education ? myProfileData.education : "none"}
                </span>
              </p>
              <p className="flex flex-col text-sm">
                Country{" "}
                <span className="text-xl">
                  {myProfileData.country ? myProfileData.country : "none"}
                </span>
              </p>
              <p className="flex flex-col text-sm">
                City{" "}
                <span className="text-xl">
                  {myProfileData.city ? myProfileData.city : "none"}
                </span>
              </p>
            </div>
            {/* Right Part */}
            <div className="space-y-3">
              <p className="flex flex-col text-sm">
                Phone{" "}
                <span className="text-xl">
                  {myProfileData.phone ? myProfileData.phone : 0}
                </span>
              </p>
              <p className="flex flex-col text-sm">
                Age{" "}
                <span className="text-xl">
                  {myProfileData.age ? myProfileData.age : 0} Years
                </span>
              </p>
              <p className="flex flex-col text-sm">
                Language{" "}
                <span className="text-xl">
                  {myProfileData.language ? myProfileData.language : "none"}
                </span>
              </p>
              <p className="flex flex-col text-sm">
                Current Salary($){" "}
                <span className="text-xl">
                  {myProfileData.currentSalary
                    ? myProfileData.currentSalary
                    : 0}
                </span>
              </p>
              <p className="flex flex-col text-sm">
                Expected Salary($){" "}
                <span className="text-xl">
                  {myProfileData.expectedSalary
                    ? myProfileData.expectedSalary
                    : 0}
                </span>
              </p>
            </div>
          </div>
          {/* Links Part */}
          <div>
            <p className="flex flex-col text-sm">
              Website Link{" "}
              <span className="text-xl text-blue-600 hover:underline cursor-pointer">
                {myProfileData.website ? myProfileData.website : "none"}
              </span>
            </p>
            <p className="flex flex-col text-sm">
              Facebook Link{" "}
              <span className="text-xl text-blue-600 hover:underline cursor-pointer">
                {myProfileData.facebook ? myProfileData.facebook : "none"}
              </span>
            </p>
            <p className="flex flex-col text-sm">
              LinkedIn Link{" "}
              <span className="text-xl text-blue-600 hover:underline cursor-pointer">
                {myProfileData.linkedin ? myProfileData.linkedin : "none"}
              </span>
            </p>
          </div>
          {/* About Me Part */}
          <div className="mt-10">
            <p className="flex flex-col text-xl">
              About Me{" "}
              <span className="text-base text-slate-600">
                {myProfileData.description
                  ? myProfileData.description
                  : "Nothing Write Yet!"}
              </span>
            </p>
          </div>
        </div>
      </div>

      {showEditForm && (
        <EditForm
          handleUpdateProfileData={handleUpdateProfileData}
          onClose={() => {
            setShowEditForm(false);
          }}
          myProfileData={myProfileData}
        />
      )}
    </div>
  );
};

export default MyProfile;
