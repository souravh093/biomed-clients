import React from "react";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const TrendingSlide = ({ job }) => {
  return (
    <div className="border rounded-xl w-full h-[470px]">
      <img className="rounded-t-xl w-full" src={job.job_image} alt="" />
      <div className="p-2 h-100 overflow-hidden space-y-2">
        <h2 className="text-base text-gray-500 pt-4">{job.job_title}</h2>
        <Link to="/">
          <p className="mb-1 text-xl font-semibold hover:text-[#5BBB7B] hover:underline duration-500 cursor-pointer">
            {`${job.job_text.slice(0, 50)}...`}
          </p>
        </Link>
        <div className="flex items-center">
          <MdLocationOn className="text-xl" />
          <p className="text-base xl:text-lg">
            Location: <span className="text-gray-500">{job.location}</span>
          </p>
        </div>
        <hr className="mx-10 my-2 border-t border-gray-300" />
      </div>

      <div className="flex flex-col xl:flex-row justify-between items-center p-2">
        <div className="flex items-center gap-2 hover:text-[#5BBB7B] duration-500 cursor-pointer">
          <img className="h-8 w-8 rounded-full" src={job.ceo_image} alt="" />
          <p className="text-lg">{job.ceo_name}</p>
        </div>
        <p className="text-lg">
          <span className="text-gray-500">Salary:</span> {job.salary}
        </p>
      </div>
    </div>
  );
};

export default TrendingSlide;
