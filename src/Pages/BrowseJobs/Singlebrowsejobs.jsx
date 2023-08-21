import { BsBookmarkPlus } from "react-icons/bs";
import { FaIndustry, FaChair } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Singlebrowsejobs = ({ jobsdata }) => {
  const {
    experience,
    logo,
    offer,
    title,
    _id,
    companyName,
    country,
    description,
    jobType,
    industry,
    startDate,
  } = jobsdata;

  return (
      <div className="border p-7 flex flex-col hover:border-hover transition rounded-md ">
        <div className="flex items-center justify-between mb-5">
          <div className="text-3xl font-bold text-gray-600">
            <h2>{title}</h2>
          </div>
          <div>
            <BsBookmarkPlus className="text-2xl" />
          </div>
        </div>

        <div className="flex items-center gap-5 mb-5">
          <div>
            <img className="w-20 object-contain" src={logo} alt="logo" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-600">
              {companyName}
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 mb-5">
          <div className="flex gap-2 items-center text-lg text-gray-500 font-semibold">
            <FaIndustry className="text-3xl text-primary" /> {industry}
          </div>
          <div className="flex gap-2 items-center text-lg text-gray-500 font-semibold">
            <MdLocationOn className="text-3xl text-primary" /> {country}
          </div>
          <div className="flex gap-2 items-center text-lg text-gray-500 font-semibold">
            <AiOutlineClockCircle className="text-3xl text-primary" /> {2} days
            ago
          </div>
          <div className="flex gap-2 items-center text-lg text-gray-500 font-semibold">
            <FaChair className="text-3xl text-primary" /> {5} Vacancies
          </div>
        </div>

        <div className="flex items-center justify-between mb-5">
          <div className="border-2 rounded-3xl px-3 py-1 bg-gray-100">
            {startDate}
          </div>
          <div className="border-2 rounded-3xl px-3 py-1 bg-gray-100">
            {experience}
          </div>
          <div className="border-2 rounded-3xl px-3 py-1 bg-gray-100">
            {jobType}
          </div>
        </div>

        <div className="my-5">
          <h2 className="text-lg">
            <span className="font-semibold">Salary:</span> {offer}
          </h2>
        </div>

        <div className="line-clamp-3 mb-5">{description}</div>

        <div className="mt-auto grid grid-cols-2 gap-5">
          <Link
            className="flex items-center justify-center bg-[#7566D9] py-3 text-gray-200 rounded-lg"
            to={`/jobsDatail/${_id}`}
          >
            Apply Now
          </Link>
          <Link
            className="flex items-center justify-center bg-primary py-3 text-gray-200 rounded-lg"
            to={`/jobsDatail/${_id}`}
          >
            View Details
          </Link>
        </div>
      </div>
  );
};

export default Singlebrowsejobs;
