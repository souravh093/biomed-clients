import React from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Notifications from "../../DashboardHome/Notifications/Notifications";
import ProfileViews from "../../DashboardHome/ProfileViews/ProfileViews";
import RecentApplicants from "../../DashboardHome/RecentApplicants/RecentApplicants";
import CandidateBox from "./CandidateBox/CandidateBox";

const CandidateHome = () => {
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
    <div className="p-6">
      {/* Heading Section */}
      <div>
        <h2 className="text-3xl font-semibold">
          Howdy, {updateData.name2 ? updateData.name2 : user.displayName}!
        </h2>
        <p className="text-gray-600 text-base py-3">Ready to jump?</p>
        <button className="text-base text-primary hover:text-green-600 flex items-center gap-2 bg-slate-200 hover:bg-slate-300 duration-500 px-6 py-3 rounded-md mt-6 lg:hidden">
          <HiOutlineMenuAlt3 /> Menu
        </button>
      </div>
      {/* Box Section */}
      <CandidateBox/>

      {/* Chart Section &  Notification Section */}
      <div className="xl:flex items-start gap-4 w-full">
        <ProfileViews />
        <Notifications />
      </div>

      {/* Recent Applicants Section */}
      <RecentApplicants />
    </div>
  );
};

export default CandidateHome;
