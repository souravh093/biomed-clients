import { BsBriefcase } from "react-icons/bs";
import { Link } from "react-router-dom";

const Singlebrowsejobs = ({ jobsdata }) => {
  console.log(jobsdata);
  const {_id, name, email, description, username, country, city, deadline, address, skills, job, carrier, offer, experience, qualification, gender, industry, logo, thumbnail} = jobsdata;
  return (
    <div className="border mt-20  mb-20 rounded-lg hover:shadow-md">
      <div className="flex h-52 gap-5 items-center px-7">
        <div className="">
          <img src={logo} alt="" className="w-[50px] h-[50px] rounded-full object-cover" />
        </div>
        <div className="w-[70%]">
          <h2 className="font-medium text-xl">{name}</h2>
          <div className="flex gap-3 items-start mt-5 text-[#333333]">
            <div className="flex items-center gap-1">
              <BsBriefcase></BsBriefcase>
              <p>{address}</p>
            </div>
            <div className="">
              <div className="flex items-center gap-1">
                <BsBriefcase></BsBriefcase>
                <p>CTC (ANNUAL)</p>
              </div>
              <p>{offer}</p>
            </div>

            <div className="">
              <div className="flex items-center gap-1">
                <BsBriefcase></BsBriefcase>
                <p>EXPERIENCE</p>
              </div>
              <p>{experience}</p>
            </div>
          </div>
        </div>
        <div className="w-[10%]">icon</div>
      </div>
      <div className="flex justify-end gap-3 mr-10 py-5">
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
