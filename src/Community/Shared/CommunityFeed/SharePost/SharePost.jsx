import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { CgTag } from "react-icons/cg";
import { HiEmojiHappy } from "react-icons/hi";
import { ImLocation2 } from "react-icons/im";
import { MdPermMedia } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";
import "./SharePost.css";

const SharePost = () => {
  const { user } = useContext(AuthContext);
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
  console.log("updateData", updateData);
  console.log("user", user);
  return (
    <div className="share">
      <div className="p-1 md:p-2">
        <div className="flex">
          <Link to={"/community/community-profile"}>
            <div
              title="View Profile"
              className="md:mx-2 w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden cursor-pointer"
            >
              <img
                referrerPolicy="no-referrer"
                src={updateData?.image ? updateData?.image : user?.photoURL}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
          <input
            className="border-none w-11/12 md:w-full focus:outline-none px-1"
            type="text"
            placeholder={` ${
              updateData?.name2 ? updateData?.name2 : user?.displayName
            } What's in your mind?`}
          />
        </div>
        <hr className="shareHr" />
        <div className="md:flex justify-between items-center">
          {/* Post Items  */}
          <div className="shareBottom ">
            <div className="md:flex items-center space-y-1 md:space-y-0 md:gap-4 lg:gap-4 xl:gap-6 px-3 lg:px-0 pb-3">
              <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row space-y-1 md:space-y-0 lg:space-y-1 md:gap-4 lg:gap-0 xl:gap-6">
                <div className="shareOption">
                  <MdPermMedia className="shareIcon text-red-500" />
                  <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                  <CgTag className="shareIcon text-blue-600" />
                  <span className="shareOptionText">Tag</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row space-y-1 md:space-y-0 lg:space-y-1 md:gap-4 lg:gap-0 xl:gap-6">
                <div className="shareOption">
                  <ImLocation2 className="shareIcon text-green-600" />
                  <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                  <HiEmojiHappy className="shareIcon text-yellow-500" />
                  <span className="shareOptionText">Feelings</span>
                </div>
              </div>
            </div>
          </div>
          {/* Share Button  */}
          <button className="shareButton border-0 rounded-md bg-green-600 font-normal text-white text-base cursor-pointer px-4 py-2">Share</button>
        </div>
      </div>
    </div>
  );
};

export default SharePost;
