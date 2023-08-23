import { Switch } from "@headlessui/react";
import React, { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import CreatableSelect from "react-select/creatable";
import { AuthContext } from "../../../Provider/AuthProvider";

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
const JobsSidebar = () => {
  const { setJobsSidebarToggle } = useContext(AuthContext);

  const [enabled, setEnabled] = useState(false);
  const [bnenabled, setBenabled] = useState(false);
  const [cenabled, setCenabled] = useState(false);

  const [skillOptions, setSkillOptions] = useState(null);

  return (
    <div className="px-4 md:px-10 py-5 h-screen dark:bg-gray-800 dark:text-white bg-white">
      <div>
        <div className="flex justify-end lg:hidden">
          <button
            onClick={() => setJobsSidebarToggle(false)}
            className="bg-primary p-2 mt-2 rounded-full text-white hover:bg-hover"
          >
            <AiOutlineClose />
          </button>
        </div>
        <h2 className="py-3">Search by Keywords</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Job title or company"
            className="w-full py-3 pl-8 md:pl-14 lg:pl-10 rounded-lg  focus:outline-none  focus:ring focus:ring-[#5BBB7B] text-xs md:text-sm"
          />
          <button className="absolute top-0 left-0 bottom-0 w-10 pl-3">
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
            className="w-full py-3 pl-8 md:pl-14 lg:pl-10 rounded-lg  focus:outline-none  focus:ring focus:ring-[#5BBB7B] text-xs md:text-sm"
          />
          <button className="absolute top-0 left-0 bottom-0 w-10 pl-3">
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
    </div>
  );
};

export default JobsSidebar;
