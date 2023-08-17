import React from "react";
import { PiBagSimpleBold } from "react-icons/pi";
import { GiConfirmed } from "react-icons/gi";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import JobForm from "./JobForm/JobForm";
import DashboardTitle from "../../../components/DashboardTitle/DashboardTitle";

const PostJob = () => {
  return (
    <div className="min-h-screen p-6">
      <DashboardTitle title={"Post a New job"} slogan={"Ready to jump back in?"} />
      <div className="bg-white min-h-screen">
        <div className="p-10">
          <h2 className="text-lg font-semibold text-gray-600 mb-10">
            Post Job
          </h2>
          <div>
            <div className="grid gap-5 lg:flex items-center lg:gap-20">
              <div className="text-2xl flex items-center gap-5">
                <div className="bg-[#c6fcb5] text-primary p-5 rounded-full">
                  <PiBagSimpleBold className="text-5xl" />
                </div>
                <h2>Job Detail</h2>
              </div>
              <div className="text-2xl flex items-center gap-5">
                <div className="bg-[#c6fcb5] text-primary p-5 rounded-full">
                  <LiaMoneyCheckAltSolid className="text-5xl" />
                </div>
                <h2>Package & Payment</h2>
              </div>
              <div className="text-2xl flex items-center gap-5">
                <div className="bg-[#c6fcb5] text-primary p-5 rounded-full">
                  <GiConfirmed className="text-5xl" />
                </div>
                <h2>Confirmation</h2>
              </div>
            </div>
          </div>

          <JobForm />
        </div>
      </div>
    </div>
  );
};

export default PostJob;
