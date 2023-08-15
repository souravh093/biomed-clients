import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsCheck2 } from "react-icons/bs";
import { LiaEyeSolid, LiaTrashAltSolid } from "react-icons/lia";

const ApplicantsCard = ({ applicant }) => {
  const { image, name, position, location, pay_per_hour } = applicant;
  return (
    <div className="flex items-center gap-4 mb-2 border w-full p-5 rounded-xl">
      <div>
        <img className="rounded-full h-24 w-24" src={image} alt="" />
      </div>
      <div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-base text-blue-700">{position}</p>
        <div className="flex">
          <p>{location}</p>
          <p>${pay_per_hour} / hour</p>
        </div>
        <div className="space-x-3">
          <button className="bg-blue-100 p-2 text-lg rounded-lg hover:bg-blue-700 hover:text-white duration-500">
            <LiaEyeSolid />
          </button>
          <button className="bg-blue-100 p-2 text-lg rounded-lg hover:bg-blue-700 hover:text-white duration-500">
            <BsCheck2 />
          </button>
          <button className="bg-blue-100 p-2 text-lg rounded-lg hover:bg-blue-700 hover:text-white duration-500">
            <AiOutlineCloseCircle />
          </button>
          <button className="bg-blue-100 p-2 text-lg rounded-lg hover:bg-blue-700 hover:text-white duration-500">
            <LiaTrashAltSolid />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicantsCard;
