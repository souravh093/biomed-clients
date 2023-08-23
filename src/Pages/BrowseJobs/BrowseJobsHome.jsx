import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import BrowsJobsCard from "./BrowsJobsCard/BrowsJobsCard";

const BrowseJobsHome = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 4;
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const { user } = useContext(AuthContext);

  const { data: browseJobsData = [], isLoading } = useQuery({
    queryKey: ["jobs", user?.email],
    queryFn: async () => {
      const res = await axios(`http://localhost:5000/jobs`);
      return res.data;
    },
  });

  return (
    <div>
      {/* job card */}
      <div className="mb-6">
        <div className="grid md:grid-cols-2 gap-5">
          {browseJobsData
            ?.slice(startIndex, endIndex)
            ?.map((jobsdata, index) => (
              <BrowsJobsCard key={index} jobsdata={jobsdata}></BrowsJobsCard>
            ))}
        </div>
        <div className="flex justify-center mt-7">
          <button
            className={`mr-5 ${currentPage === 1 ? "cursor-not-allowed" : ""}`}
            onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
            disabled={currentPage === 1}
          >
            <FaArrowLeft />
          </button>
          <div className="flex">
            {Array.from({
              length: Math.ceil(browseJobsData.length / rowsPerPage),
            }).map((_, index) => (
              <button
                key={index}
                className={`mx-3 py-3 px-4 rounded-lg ${
                  currentPage === index + 1
                    ? "bg-green-400 text-white"
                    : "bg-gray-200 text-gray-600 hover:bg-green-400 hover:text-white"
                } `}
                onClick={() => setCurrentPage(index + 1)}
                disabled={currentPage === index + 1}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            className={`ml-2 ${
              endIndex >= browseJobsData.length ? "cursor-not-allowed" : ""
            }`}
            onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
            disabled={endIndex >= browseJobsData.length}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrowseJobsHome;
