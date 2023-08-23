import { useContext, useState } from "react";
import Container from "../../components/Shared/Container/Container";
import CreatableSelect from "react-select/creatable";
import Singlebrowsejobs from "./Singlebrowsejobs";
import { BiSearch } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { Switch } from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const skills = [
  { value: "react", label: "React" },
  { value: "javascript", label: "JavaScript" },
  { value: "vu.js", label: "Vu.js" },
  { value: "angular", label: "Angular" },
  { value: "reactnative", label: "React Native" },
  { value: "wordpress", label: "WordPress" },
  { value: "laravel", label: "Laravel" },
  { value: "devops", label: "Devops" },
  { value: "python", label: "Python" },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    border: "none",
    boxShadow: "none",
    "&:hover": {
      border: "none",
    },
  }),
};

const BrowseJobs = () => {
  const { user } = useContext(AuthContext);
  const [enabled, setEnabled] = useState(false);
  const [bnenabled, setBenabled] = useState(false);
  const [cenabled, setCenabled] = useState(false);

  const [skillOptions, setSkillOptions] = useState(null);

  const { data: browseJobsData = [] } = useQuery({
    queryKey: ["jobs", user?.email],
    queryFn: async () => {
      const res = await axios(`https://biomed-server.vercel.app/jobs`);
      return res.data;
    },
  });

  return (
    <Container>
      <div className="grid grid-cols-9 gap-5 mt-10 pb-10">
        <div className="bg-[#F5F7FC] col-span-3 px-8 rounded-lg hidden md:block">
          <aside className="sticky top-0">
            <div>
              <h2 className="py-3 mt-7">Search by Keywords</h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  className="w-full py-3 pl-14 rounded-lg  focus:outline-none  focus:ring focus:ring-[#5BBB7B]"
                />
                <button className="absolute top-0 left-0 bottom-0 w-10 pl-4">
                  <BiSearch></BiSearch>
                </button>
              </div>
            </div>

            <div>
              <h2 className="py-3 mt-2">Location</h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="City or postcode"
                  className="w-full py-3 pl-14 rounded-lg focus:outline-none  focus:ring focus:ring-[#5BBB7B]"
                />
                <button className="absolute top-0 left-0 bottom-0 w-10 pl-4">
                  <CiLocationOn></CiLocationOn>
                </button>
              </div>
            </div>

            <div className="space-y-5">
              <h2 className="mt-5 ">Job type</h2>
              <div className="flex gap-4">
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className={`${
                    enabled ? "bg-blue-600" : "bg-gray-200"
                  } relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                  <span className="sr-only">Enable notifications</span>
                  <span
                    className={`${
                      enabled ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                  />
                </Switch>
                <p>Full Time</p>
              </div>

              <div className="flex gap-4">
                <Switch
                  checked={bnenabled}
                  onChange={setBenabled}
                  className={`${
                    bnenabled ? "bg-blue-600" : "bg-gray-200"
                  } relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                  <span className="sr-only">Enable notifications</span>
                  <span
                    className={`${
                      bnenabled ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                  />
                </Switch>
                <p>Part Time</p>
              </div>
              <div className="flex gap-4">
                <Switch
                  checked={cenabled}
                  onChange={setCenabled}
                  className={`${
                    cenabled ? "bg-blue-600" : "bg-gray-200"
                  } relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                  <span className="sr-only">Enable notifications</span>
                  <span
                    className={`${
                      cenabled ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                  />
                </Switch>
                <p>Temporary</p>
              </div>
            </div>

            <div>
              <h2 className="py-3 mt-5">Category</h2>
              <div className="relative">
                <div className="mb-4">
                  <CreatableSelect
                    className="w-full px-4 py-2 bg-gray-100 border rounded-md focus:ring focus:ring-blue-300"
                    defaultValue={skillOptions}
                    onChange={setSkillOptions}
                    options={skills}
                    styles={customStyles}
                    isMulti
                  />
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <h2 className="mt-5 -mb-3">Date Posted</h2>
              <div className="flex gap-4">
                <input type="radio" className="w-[20px]" name="" id="" />
                <label htmlFor="">Any time</label>
              </div>
              <div className="flex gap-4">
                <input type="radio" className="w-[20px]" name="" id="" />
                <label htmlFor="">Past month</label>
              </div>
              <div className="flex gap-4">
                <input type="radio" className="w-[20px]" name="" id="" />
                <label htmlFor="">Past week</label>
              </div>
              <div className="flex gap-4">
                <input type="radio" className="w-[20px]" name="" id="" />
                <label htmlFor="">Past 24 hours</label>
              </div>
            </div>
            <div className="flex mt-2">
              <button className="bg-primary ml-auto  text-gray-100 px-8 py-1 rounded-md hover:bg-[#4ca068] transition cursor-pointer">
                Clear All
              </button>
            </div>
          </aside>
        </div>

        {/* job card */}
        <div className="col-span-6">
          <div className="grid lg:grid-cols-2 gap-5">
            {browseJobsData.map((jobsdata, index) => (
              <Singlebrowsejobs
                key={index}
                jobsdata={jobsdata}
              ></Singlebrowsejobs>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BrowseJobs;
