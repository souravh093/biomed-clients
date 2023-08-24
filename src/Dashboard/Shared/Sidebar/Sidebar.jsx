import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import CandidateMenu from "../../DashboardCandidate/CandidateMenu/CandidateMenu";
import ClientMenu from "../../DashboardClient/ClientMenu/ClientMenu";

const Sidebar = () => {
  const { clientRole } = useContext(AuthContext);
  return (
    <div className="fixed dark:bg-gray-800 dark:text-white">
      {clientRole ? <ClientMenu /> : <CandidateMenu />}
    </div>
  );
};

export default Sidebar;
