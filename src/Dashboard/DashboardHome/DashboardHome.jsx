import React from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Notifications from "./Notifications/Notifications";
import ProfileViews from "./ProfileViews/ProfileViews";
import RecentApplicants from "./RecentApplicants/RecentApplicants";
import TopBox from "./TopBox/TopBox";

const DashboardHome = () => {
  return (
    <div className="p-6">
      {/* Heading Section */}
      <div>
        <h2 className="text-3xl font-semibold">Dashboard Home!</h2>
        <p className="text-gray-600 text-base py-3">Ready to jump?</p>
        <button className="text-base text-primary hover:text-green-600 flex items-center gap-2 bg-slate-200 hover:bg-slate-300 duration-500 px-6 py-3 rounded-md mt-6 lg:hidden">
          <HiOutlineMenuAlt3 /> Menu
        </button>
      </div>
      {/* Box Section */}
      <TopBox />

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

export default DashboardHome;
