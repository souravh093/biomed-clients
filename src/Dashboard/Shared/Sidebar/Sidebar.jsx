import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import ClientMenu from "../../DashboardClient/ClientMenu/ClientMenu";
import CandidateMenu from "../../DashboardCandidate/CandidateMenu/CandidateMenu";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const {user, clientRole, candidateRole} = useContext(AuthContext);
  return (
    <div className="bg-red-600">
      <Link to='/dashboard/manage-jobs'>Manage Jobs</Link>
      {
        clientRole ? (
          <ClientMenu />
        ) : candidateRole ? (
          <CandidateMenu />
        ) : <></>
      }
    </div>
  );
};

export default Sidebar;
