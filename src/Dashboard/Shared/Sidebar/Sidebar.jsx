import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import CandidateMenu from "../../DashboardCandidate/CandidateMenu/CandidateMenu";
import ClientMenu from "../../DashboardClient/ClientMenu/ClientMenu";
import AdminMenu from "../../DashboardAdmin/AdminMenu/AdminMenu";
import ModeratorMenu from "../../DashboardModerator/ModeratorMenu/ModeratorMenu";

const Sidebar = () => {
  const { clientRole, adminRole, moderatorRole } = useContext(AuthContext);

  console.log(adminRole, clientRole, moderatorRole)
  return (
    <div className="fixed dark:bg-gray-800 dark:text-white">
      {adminRole ? (
        <AdminMenu />
      ) : clientRole ? (
        <ClientMenu />
      ) : moderatorRole ? (
        <ModeratorMenu />
      ) : (
        <CandidateMenu />
      )}
    </div>
  );
};

export default Sidebar;
