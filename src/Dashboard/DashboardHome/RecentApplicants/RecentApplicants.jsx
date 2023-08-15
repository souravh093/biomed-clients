import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import ApplicantsCard from "./ApplicantsCard/ApplicantsCard";

const RecentApplicants = () => {
  const { isLoading, data: applicants = [] } = useQuery({
    queryKey: ["applicants"],
    queryFn: async () => {
      const res = await axios("/applicantsData/applicants.json");
      return res.data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="mt-8 bg-white rounded-lg p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-3">Recent Applicants</h3>
      {applicants.map((applicant) => (
        <div key={applicant._id}>
          <ApplicantsCard applicant={applicant} />
        </div>
      ))}
    </div>
  );
};

export default RecentApplicants;
