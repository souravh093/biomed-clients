import React from "react";
import Notifications from "./Notifications/Notifications";
import ProfileViews from "./ProfileViews/ProfileViews";
import RecentApplicants from "./RecentApplicants/RecentApplicants";
import TopBox from "./TopBox/TopBox";
import DashboardTitle from "../../components/DashboardTitle/DashboardTitle";

const DashboardHome = () => {
  return (
    <div className="p-6">
      {/* Heading Section */}
      <DashboardTitle title={"Dashboard Home!"} slogan={"Read to Jump"} />
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
