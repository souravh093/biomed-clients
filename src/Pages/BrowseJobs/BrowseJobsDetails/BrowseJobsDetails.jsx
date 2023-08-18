import { Link, useLoaderData } from "react-router-dom";
import Container from "../../../components/Shared/Container/Container";
import { CgWorkAlt } from "react-icons/cg";
import { BsBookmarkPlus } from "react-icons/bs";
import { AiOutlineShareAlt, AiOutlineUsergroupAdd } from "react-icons/ai";
import { PiShareFill, PiBriefcaseThin } from "react-icons/pi";
import { FiPlayCircle } from "react-icons/fi";
import { LiaMoneyCheckAltSolid, LiaBusinessTimeSolid } from "react-icons/lia";
import { BiBriefcaseAlt } from "react-icons/bi";
import { TbHomeDot } from "react-icons/tb";
import { BsHourglassSplit } from "react-icons/bs";

const BrowseJobsDetails = () => {
  const {
    address,
    carrier,
    city,
    country,
    deadline,
    description,
    email,
    experience,
    gender,
    industry,
    jobType,
    logo,
    offer,
    qualification,
    skills,
    startDate,
    thumbnail,
    title,
    username,
    _id,
    companyName,
  } = useLoaderData();

  console.log(useLoaderData());

  return (
    <Container>
      <section className="my-10 ">
        <h1 className="text-center md:text-2xl font-semibold text-[#666]">
          {jobType} Based: {title}
        </h1>
        <div className="w-[900px] mx-auto border px-7 py-7 rounded-lg mt-7">
          <div className="mb-5 flex justify-between">
            <div>
              <h2 className=" text-lg font-semibold text-[#666]">{title}</h2>
              <p className="text-lg font-semibold text-[#666]">{companyName}</p>
            </div>
            <div>
              <img src={logo} className="rounded-full" alt="" />
            </div>
          </div>

          <div className="flex items-center gap-2 my-3 ">
            <TbHomeDot></TbHomeDot>
            <p>{jobType}</p>
          </div>

          <div className="flex gap-16 my-4">
            <div>
              <div className="flex items-center gap-2">
                <FiPlayCircle></FiPlayCircle>
                <p className="text-sm">START DATE</p>
              </div>
              <p>{startDate}</p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <LiaMoneyCheckAltSolid></LiaMoneyCheckAltSolid>
                <p>CTC (ANNUAL)</p>
              </div>
              <p>{offer}</p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <BiBriefcaseAlt></BiBriefcaseAlt>
                <p>EXPERIENCE</p>
              </div>
              <p>{experience}</p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <BsHourglassSplit></BsHourglassSplit>
                <p>APPLY BY</p>
              </div>
              <p>{deadline}</p>
            </div>
          </div>

          <div className="flex justify-between mb-5">
            <div className="flex items-center gap-2">
              <AiOutlineUsergroupAdd></AiOutlineUsergroupAdd>
              <p>{4} applicants</p>
            </div>
            <div className="flex gap-5">
              <BsBookmarkPlus></BsBookmarkPlus>
              <AiOutlineShareAlt></AiOutlineShareAlt>
            </div>
          </div>

          <hr />

          <div className="mt-5">
            <h3>About GlobalShala</h3>
            <div className="flex gap-2 items-center text-blue-500">
              <Link>Website </Link>
              <PiShareFill></PiShareFill>
            </div>

            <p>
              GlobalShala is an experiential learning platform equipping you
              with 21st-century skills through lifelong learning opportunities.
              We believe in ensuring consumer engagement through the promotion
              of high-quality educational services. Through these opportunities,
              they will have the chance to explore, experience, engage and earn,
              empowering them to face any challenge ahead with confidence, and
              excitement.
            </p>

            <div className="mt-4 border px-5 py-3 rounded-xl">
              <h5 className="">Activity on Internshala</h5>
              <div className="flex gap-7">
                <div className="flex items-center gap-2">
                  <LiaBusinessTimeSolid></LiaBusinessTimeSolid>
                  <p>{country}</p>
                </div>

                <div className="flex items-center gap-2">
                  <PiBriefcaseThin></PiBriefcaseThin>
                  <p>{country}</p>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h4>About the job</h4>
              <p>Key responsibilities:</p>
              <p>{description}</p>
            </div>

            <div>
              <h3 className="mb-3 mt-5">Skill(s) required</h3>
              {skills.map((skill, index) => (
                <span key={index} className="bg-slate-100 py-1 px-2 mr-2  rounded-full text-sm">
                  {skill.value}
                </span>
              ))}
            </div>

            <div className="mt-5">
              <h3 className="">Salary</h3>
              <p>Annual CTC: {offer} /year</p>
            </div>

            <div className="mt-5">
              <h3>Number of openings</h3>
              <p>{3}</p>
            </div>

            <div className="mt-5">
              <button className="bg-primary block mx-auto text-gray-100 px-8 py-3 rounded-md hover:bg-[#4ca068] transition cursor-pointer ">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default BrowseJobsDetails;
