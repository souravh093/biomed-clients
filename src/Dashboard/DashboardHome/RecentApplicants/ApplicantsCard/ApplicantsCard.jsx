import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsCheck2 } from "react-icons/bs";
import { LiaEyeSolid, LiaTrashAltSolid } from "react-icons/lia";
import { PiMoneyLight } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import { Tooltip as ReactTooltip } from "react-tooltip";

const ApplicantsCard = ({ applicant }) => {
  const { image, name, position, location, pay_per_hour } = applicant;
  return (
    <div className="xl:flex gap-4 mb-2 border w-full px-5 py-5 lg:py-10 rounded-xl">
      <div>
        <img
          className="rounded-full h-28 w-28 mb-2 xl:mb-0"
          src={image}
          alt=""
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-base text-blue-700 mb-2">{position}</p>
        <div className="md:flex items-center gap-4">
          <p className="flex items-center gap-1">
            <SlLocationPin />
            <span>{location}</span>
          </p>
          <p className="flex items-center gap-1">
            <PiMoneyLight /> <span>${pay_per_hour} / hour</span>
          </p>
        </div>
        <div className="space-x-2 md:space-x-3 pt-4">
          {/* Button - 1 */}
          <button
            className="bg-blue-100 p-2 text-lg rounded-lg hover:bg-blue-700 hover:text-white duration-500"
            data-tooltip-id="tooltip-1"
          >
            <LiaEyeSolid />
          </button>
          <ReactTooltip
            id="tooltip-1"
            place="bottom"
            content="View Application"
          />
          {/* Button - 2 */}
          <button
            className="bg-blue-100 p-2 text-lg rounded-lg hover:bg-blue-700 hover:text-white duration-500"
            data-tooltip-id="tooltip-2"
          >
            <BsCheck2 />
          </button>
          <ReactTooltip
            id="tooltip-2"
            place="bottom"
            content="Approve Application"
          />
          {/* Button - 3 */}
          <button
            className="bg-blue-100 p-2 text-lg rounded-lg hover:bg-blue-700 hover:text-white duration-500"
            data-tooltip-id="tooltip-3"
          >
            <AiOutlineCloseCircle />
          </button>
          <ReactTooltip
            id="tooltip-3"
            place="bottom"
            content="Reject Application"
          />
          {/* Button - 4 */}
          <button
            className="bg-blue-100 p-2 text-lg rounded-lg hover:bg-blue-700 hover:text-white duration-500"
            data-tooltip-id="tooltip-4"
          >
            <LiaTrashAltSolid />
          </button>
          <ReactTooltip
            id="tooltip-4"
            place="bottom"
            content="Delete Application"
          />
        </div>
      </div>
    </div>
  );
};

export default ApplicantsCard;
