import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import CandidateMenu from "../../DashboardCandidate/CandidateMenu/CandidateMenu";
import ClientMenu from "../../DashboardClient/ClientMenu/ClientMenu";

const Sidebar = () => {
  const { clientRole, candidateRole } = useContext(AuthContext);
  return (
    <div className="fixed">
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
