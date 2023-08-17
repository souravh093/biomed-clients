import { useEffect, useState } from "react";
import Container from "../../components/Shared/Container/Container";
import Singlebrowsejobs from "./Singlebrowsejobs";
import { BiSearch } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { BsBriefcase } from "react-icons/bs";

import { Switch } from "@headlessui/react";
import { Combobox } from "@headlessui/react";

const people = [
  "Durward Reynolds",
  "Kenton Towne",
  "Therese Wunsch",
  "Benedict Kessler",
  "Katelyn Rohan",
];

const BrowseJobs = () => {
  const [enabled, setEnabled] = useState(false);
  const [bnenabled, setBenabled] = useState(false);
  const [cenabled, setCenabled] = useState(false);

  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        });

  const [browseJobsData, setBrowseJobsData] = useState([]);
  useEffect(() => {
    fetch("browserjobsData/browserjobsData.json")
      .then((res) => res.json())
      .then((data) => setBrowseJobsData(data));
  }, []);

  console.log(browseJobsData);

  return (
    <Container>
      <div className="flex gap-20 mt-20">
        <div className="bg-[#F5F7FC] w-[400px] h-[800px] mx-auto rounded-lg px-8">
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
              <Combobox value={selectedPerson} onChange={setSelectedPerson}>
                <Combobox.Input
                  onChange={(event) => setQuery(event.target.value)}
                />
                <Combobox.Options>
                  {filteredPeople.map((person) => (
                    <Combobox.Option key={person} value={person}>
                      {person}
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              </Combobox>
              <button className="absolute top-0 left-0 bottom-0 w-10 pl-4">
                <BsBriefcase></BsBriefcase>
              </button>
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

        {/* job card */}
        <div className=" w-[800px] mx-auto">
          <h1>Helll</h1>
          {browseJobsData.map((jobsdata, index) => (
            <Singlebrowsejobs
              key={index}
              jobsdata={jobsdata}
            ></Singlebrowsejobs>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default BrowseJobs;
