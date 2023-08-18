import { createBrowserRouter } from "react-router-dom";
import AppliedJobs from "../Dashboard/DashboardCandidate/AppliedJobs/AppliedJobs";
import CandidateHome from "../Dashboard/DashboardCandidate/CandidateHome/CandidateHome";
import EditProfile from "../Dashboard/DashboardCandidate/MyProfile/EditProfile/EditProfile";
import MyProfile from "../Dashboard/DashboardCandidate/MyProfile/MyProfile";
import ShortlistedJobs from "../Dashboard/DashboardCandidate/ShortlistedJobs/ShortlistedJobs";
import CompanyProfile from "../Dashboard/DashboardClient/CompanyProfile/CompanyProfile";
import PostJob from "../Dashboard/DashboardClient/PostJob/PostJob";
import DashboardHome from "../Dashboard/DashboardHome/DashboardHome";
import Dashboard from "../Layout/Dashboard";
import Root from "../Layout/Root";
import BlogDetails from "../Pages/Blogs/BlogDetails/BlogDetails";
import Blogs from "../Pages/Blogs/Blogs";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import RegisterClient from "../Pages/LoginClient/RegisterClient/RegisterClient";
import Terms from "../components/Terms/Terms";
import PrivateClient from "./PrivateClient";
import BrowseJobs from "../Pages/BrowseJobs/BrowseJobs";
import BrowseJobsDetails from "../Pages/BrowseJobs/BrowseJobsDetails/BrowseJobsDetails";
import ManageJob from "../Dashboard/DashboardClient/ManageJob/ManageJob";
import ShortlistedResumes from "../Dashboard/DashboardClient/ShortlistedResumes/ShortlistedResumes";
import CompanyView from "../Dashboard/DashboardClient/CompanyProfile/CompanyView/CompanyView";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogDetails/:id",
        element: <BlogDetails />,
      },

      {
        path: '/browseJobs',
        element: <BrowseJobs /> 
      },
      {
        path: '/jobsDatail/:id',
        element: <BrowseJobsDetails />,
        loader: ({params}) =>  fetch(`https://biomed-server.vercel.app/job/${params.id}`)
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/terms",
        element: <Terms></Terms>,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/registerclient",
        element: <RegisterClient />,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/dashboard-home",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/candidate-home",
        element: <CandidateHome />,
      },
      {
        path: "/dashboard/my-profile",
        element: <MyProfile />,
      },
      {
        path: "/dashboard/applied-jobs",
        element: <AppliedJobs />,
      },
      {
        path: "/dashboard/post-job",
        element: (
          <PrivateClient>
            <PostJob />
          </PrivateClient>
        ),
      },
      {
        path: "/dashboard/company-profile",
        element: <CompanyProfile />,
      },
      {
        path: "/dashboard/company-view",
        element: <CompanyView />
      },
      {
        path: "/dashboard/shortlisted-jobs",
        element: <ShortlistedJobs />,
      },
      {
        path:'/dashboard/manage-jobs',
        element:<ManageJob/>
      },
      {
        path:'/dashboard/shortlisted-resumes',
        element:<ShortlistedResumes/>
      },
      {
        path: "/dashboard/editProfile",
        element: <EditProfile />,
      },
    ],
  },
]);

export default router;
