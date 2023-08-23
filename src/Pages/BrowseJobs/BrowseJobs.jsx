import React, { useContext, useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Container from "../../components/Shared/Container/Container";
import JobsSidebar from "./JobsSidebar/JobsSidebar";

const BrowseJobs = () => {
  const { jobsSidebarToggle, setJobsSidebarToggle } = useContext(AuthContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setIsSidebarOpen(jobsSidebarToggle);
  }, [jobsSidebarToggle]);

  return (
    <div className="pt-20">
      <Container>
        <button
          onClick={() => setJobsSidebarToggle(true)}
          className="text-base text-primary hover:text-green-600 flex items-center gap-2 bg-slate-200 hover:bg-slate-300 duration-500 px-6 py-3 rounded-md mt-6 lg:hidden"
        >
          <HiOutlineMenuAlt3 /> Menu
        </button>
        <div className="grid grid-cols-4 lg:grid-cols-10 xl:grid-cols-4 pt-[20px]">
          <aside
            className={`col-span-3 lg:col-span-3 xl:col-span-1 hidden lg:block sticky top-0  h-screen mb-[300px] overflow-y-scroll`}
            style={{
              transform: isSidebarOpen ? "translateX(0)" : "translateX(-100%)",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <JobsSidebar />
          </aside>

          {jobsSidebarToggle && (
            <aside
              className="col-span-3 md:col-span-2 lg:hidden sticky top-0 min-h-screen mb-[400px] overflow-scroll bg-white"
              style={{
                transform: isSidebarOpen
                  ? "translateX(0)"
                  : "translateX(-100%)",
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <JobsSidebar />
            </aside>
          )}
          <div className="col-span-4 lg:col-span-7 xl:col-span-3">
            <Outlet />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BrowseJobs;
