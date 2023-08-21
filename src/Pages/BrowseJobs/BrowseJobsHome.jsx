import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BrowsJobsCard from "./BrowsJobsCard/BrowsJobsCard";

const BrowseJobsHome = () => {
  const { user } = useContext(AuthContext);
 
  const { data: browseJobsData = [], isLoading } = useQuery({
    queryKey: ["jobs", user?.email],
    queryFn: async () => {
      const res = await axios(`https://biomed-server.vercel.app/jobs`);
      return res.data;
    },
  });

  return (
    <div className="px-4 xl:px-16">
        {/* job card */}
        <div>
          <div className="grid md:grid-cols-2 gap-5">
            {browseJobsData.map((jobsdata, index) => (
              <BrowsJobsCard
                key={index}
                jobsdata={jobsdata}
              ></BrowsJobsCard>
            ))}
          </div>
        </div>
      </div>
  );
};

export default BrowseJobsHome;
