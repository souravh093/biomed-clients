import React from "react";
import { Link } from "react-router-dom";

const TrendingSlide = ({ task }) => {
  return (
    <div className="border rounded-xl w-full h-[470px]">
      <img className="rounded-t-xl w-full" src={task.task_image} alt="" />
      <div className="p-2 h-100 overflow-hidden space-y-2">
        <h2 className="text-base text-gray-500 pt-4">{task.task_title}</h2>
        <Link to="/">
          <p className="mb-4 text-xl font-semibold hover:text-[#5BBB7B] hover:underline duration-500 cursor-pointer">
            {`${task.task_text.slice(0, 50)}...`}
          </p>
        </Link>
        <hr className="mx-4 border border-gray-300" />
      </div>

      <div className="p-3">
        <div className="flex items-center gap-2 hover:text-[#5BBB7B] duration-500 cursor-pointer">
          <img className="h-8 w-8 rounded-full" src={task.ceo_image} alt="" />
          <p className="text-lg">{task.ceo_name}</p>
        </div>
      </div>
    </div>
  );
};

export default TrendingSlide;
