import { Link, useLoaderData } from "react-router-dom";
import Container from "../../../components/Shared/Container/Container";
import { CgWorkAlt } from "react-icons/cg";
import { BsBookmarkPlus } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
import { PiShareFill } from "react-icons/pi";

const BrowseJobsDetails = () => {
  const {
    _id,
    name,
    email,
    description,
    username,
    country,
    city,
    deadline,
    address,
    skills,
    job,
    carrier,
    offer,
    experience,
    qualification,
    gender,
    industry,
    logo,
    thumbnail,
  } = useLoaderData();

  return (
    <Container>
      <section className="my-10 ">
        <h1 className="text-center md:text-2xl font-semibold text-[#666]">
          {name}
        </h1>
        <div className="w-[900px] mx-auto border px-7 py-7 rounded-lg">
          <div>
            <h2>{name}</h2>
            <h3>{city}</h3>
          </div>

          <div className="flex items-center gap-2">
            <CgWorkAlt></CgWorkAlt>
            <p>{country}</p>
          </div>

          <div className="flex gap-16">
            <div>
              <div className="flex items-center gap-2">
                <CgWorkAlt></CgWorkAlt>
                <p>{country}</p>
              </div>
              <p>Immediately</p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <CgWorkAlt></CgWorkAlt>
                <p>{country}</p>
              </div>
              <p>Immediately</p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <CgWorkAlt></CgWorkAlt>
                <p>{country}</p>
              </div>
              <p>Immediately</p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <CgWorkAlt></CgWorkAlt>
                <p>{country}</p>
              </div>
              <p>Immediately</p>
            </div>
          </div>

          <div className="flex justify-between mb-5">
            <div className="flex items-center gap-2">
              <CgWorkAlt></CgWorkAlt>
              <p>{country}</p>
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
                  <CgWorkAlt></CgWorkAlt>
                  <p>{country}</p>
                </div>

                <div className="flex items-center gap-2">
                  <CgWorkAlt></CgWorkAlt>
                  <p>{country}</p>
                </div>
              </div>
            </div>

            <div>
              <h4>About the job</h4>
              <p>Key responsibilities:</p>
              <p>
                1. Work with development teams and product managers to ideate
                software solutions <br /> 2. Design client-side and server-side
                architecture <br /> 3. Build the front-end of applications through
                appealing visual design <br /> 4. Develop and manage well-functioning
                databases and applications <br /> 5. Write effective APIs <br /> 6. Test
                software to ensure responsiveness and efficiency <br /> 7.
                Troubleshoot, debug, and upgrade software <br /> 8. Create security and
                data protection settings <br /> 9. Build features and applications with
                a mobile responsive design <br /> 10. Write reusable, testable, and
                efficient code <br /> 11. Work on the design and implementation of
                low-latency, high-availability, and performant applications
              </p>

              
            </div>

            <div>
                <h3 className="mb-3 mt-5">Skill(s) required</h3>
                <span className="bg-slate-400 py-1 px-2  rounded-full text-sm">JavaScript</span>

            </div>

            <div>
                <h3>Salary</h3>
                <p>Annual CTC: $20000 /year</p>
                <p>Annual CTC breacup</p>
                <p>1. Fixed pay: $1600 /year</p>
                <p>2. Variable pay: $4000 /year</p>

            </div>

            <div>
                <h3>Number of openings</h3>
                <p>3</p>
            </div>

            

          </div>
        </div>
      </section>
    </Container>
  );
};

export default BrowseJobsDetails;
