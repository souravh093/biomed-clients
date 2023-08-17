import { BsBriefcase } from "react-icons/bs";


const Singlebrowsejobs = ({ jobsdata }) => {
  console.log(jobsdata);
  const { title, company, jobType, time, salary, experience, image, location } =
    jobsdata;
  return (
    <div className="border mt-20 rounded-lg hover:shadow-lg">
      <div className="flex h-52 gap-2 items-center px-7">
        <div className="w-[20%] ">logo</div>
        <div className="w-[70%]">
          <h2 className="font-medium text-xl">{title}</h2>
          <div className="flex gap-3 items-start mt-5 text-[#333333]">
            <div className="flex items-center gap-1">
              <BsBriefcase></BsBriefcase>
              <p>{company}</p>
            </div>
            <div className="">
              <div className="flex items-center gap-1">
                <BsBriefcase></BsBriefcase>
                <p>CTC (ANNUAL)</p>
              </div>
              <p>{salary}</p>
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
        <button className=" text-primary px-8 py-1 rounded-md hover:text-[#4ca068] transition cursor-pointer">View details</button>
        <button className="bg-primary text-gray-100 px-8 py-1 rounded-md hover:bg-[#4ca068] transition cursor-pointer">Apply now</button>
      </div>
    </div>
  );
};

export default Singlebrowsejobs;
