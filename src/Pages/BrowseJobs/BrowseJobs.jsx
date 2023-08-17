import { useEffect, useState } from "react";
import Container from "../../components/Shared/Container/Container";
import Singlebrowsejobs from "./Singlebrowsejobs";
import { BiSearch } from "react-icons/bi";

import { Switch } from "@headlessui/react";


const BrowseJobs = () => {
  const [enabled, setEnabled] = useState(false);

  const [browseJobsData, setBrowseJobsData] = useState([]);
  useEffect(() => {
    fetch("browserjobsData/browserjobsData.json")
      .then((res) => res.json())
      .then((data) => setBrowseJobsData(data));
  }, []);

  console.log(browseJobsData);

  return (
    <Container>
      <div className="flex gap-5">
        <div className="bg-[#F5F7FC] w-[450px] rounded-lg px-8">
          <div>
            <h2 className="py-3">Search by Keywords</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Job title, keywords, or company"
                className="w-full py-4 pl-14 rounded-lg"
              />
              <button className="absolute top-0 left-0 bottom-0 w-10 pl-4">
                <BiSearch></BiSearch>
              </button>
            </div>
          </div>

          <div>
            <h2>Location</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="City or postcode"
                className="w-full py-4 pl-14 rounded-lg"
              />
              <button className="absolute top-0 left-0 bottom-0 w-10 pl-4">
                <BiSearch></BiSearch>
              </button>
            </div>
          </div>

          <div>
            <h2>Radius around selected destination</h2>
            <div className="relative">
              <input
                type="range"
                placeholder="City or postcode"
                className="w-full py-4 pl-14 rounded-lg"
              />
            </div>
          </div>

          <div>
            <h2>Category</h2>
            <div className="relative">
              <select name="" id="" className="w-full py-4 pl-14 rounded-lg">
                <option value="Choose a category">Choose a category</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              <button className="absolute top-0 left-0 bottom-0 w-10 pl-4">
                <BiSearch></BiSearch>
              </button>
            </div>
          </div>

          <div className="space-y-5">
            <h2>Job type</h2>
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
              <p>Part Time</p>
            </div>
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
              <p>Temporary</p>
            </div>
          </div>
          
          <div className="space-y-5">
            <h2>Date Posted</h2>
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
              <p>Part Time</p>
            </div>

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
              <p>Temporary</p>
            </div>
          </div>


        </div>

        {/* job card */}
        <div className=" w-[800px]">
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
