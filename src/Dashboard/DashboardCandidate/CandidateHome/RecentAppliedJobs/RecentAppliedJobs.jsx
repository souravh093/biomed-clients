import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import AppliedJobCard from "./AppliedJobCard/AppliedJobCard";


const RecentAppliedJobs = () => {
  const { isLoading, data: appliedJobs = [] } = useQuery({
    queryKey: ["appliedJobs"],
    queryFn: async () => {
      const res = await axios("/candidateJobs/candidateJobs.json");
      return res.data;
    },
  });

  console.log(appliedJobs);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="mt-8 dark:bg-gray-800  bg-white rounded-lg p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-3">Recent Applicants</h3>
      <div className="grid md:grid-cols-2 md:gap-6">
        {appliedJobs?.map((appliedJob) => (
          <AppliedJobCard key={appliedJob._id} appliedJob={appliedJob} />
        ))}
      </div>
    </div>
  );
};

export default RecentAppliedJobs;
