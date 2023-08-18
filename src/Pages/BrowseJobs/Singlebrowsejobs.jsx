import { BiBriefcaseAlt } from "react-icons/bi";
import { BsBookmarkPlus, BsBriefcase } from "react-icons/bs";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Singlebrowsejobs = ({ jobsdata }) => {
  console.log(jobsdata);
  const {
    experience,
    logo,
    offer,
    title,
    _id,
    companyName
  } = jobsdata;
  return (
    <div className="border mt-20  mb-20 rounded-lg hover:shadow-md">
      <div className="md:flex h-32 gap-5 items-start px-7 pt-6">
        <div className="">
          <img
            src={logo}
            alt=""
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
        </div>

        <div className="w-[70%]">
          <h2 className="font-medium text-xl">{title}</h2>
          <div className="md:flex gap-7 items-start mt-3 text-[#333333]">
            <div className="flex items-center gap-1">
              <BsBriefcase></BsBriefcase>
              <p>{companyName}</p>
            </div>
            <div className="">
              <div className="flex items-center gap-1">
              <LiaMoneyCheckAltSolid></LiaMoneyCheckAltSolid>
                <p>CTC (ANNUAL)</p>
              </div>
              <p>{offer}</p>
            </div>

            <div className="">
              <div className="md:flex items-center gap-1">
              <BiBriefcaseAlt></BiBriefcaseAlt>
                <p>EXPERIENCE</p>
              </div>
              <p>{experience}</p>
            </div>
          </div>
        </div>

        <div className="w-[10%] relative">
        <BsBookmarkPlus className="absolute -top-4 -right-12 text-4xl hover:bg-slate-300   p-2 hover:rounded-2xl hover:text-white cursor-pointer"></BsBookmarkPlus>
        </div>
      </div>
      <div className="flex justify-end gap-3 mr-10 pb-5 ">
        <button className=" text-primary px-8 py-1 rounded-md hover:text-[#4ca068] transition cursor-pointer">
          <Link to={`/jobsDatail/${_id}`}>View details</Link>
        </button>
        <button className="bg-primary text-gray-100 px-8 py-1 rounded-md hover:bg-[#4ca068] transition cursor-pointer">
          Apply now
        </button>
      </div>
    </div>
  );
};

export default Singlebrowsejobs;
