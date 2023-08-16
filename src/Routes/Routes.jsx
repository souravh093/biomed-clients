import { createBrowserRouter } from "react-router-dom";
import AppliedJobs from "../Dashboard/DashboardCandidate/AppliedJobs/AppliedJobs";
import EditProfile from "../Dashboard/DashboardCandidate/MyProfile/EditProfile/EditProfile";
import MyProfile from "../Dashboard/DashboardCandidate/MyProfile/MyProfile";
import ShortlistedJobs from "../Dashboard/DashboardCandidate/ShortlistedJobs/ShortlistedJobs";
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
      {
        path: "/editProfile",
        element: <EditProfile />,
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
        path: "/dashboard/applied-jobs",
        element: <AppliedJobs />,
      },
      {
        path: "/dashboard/shortlisted-jobs",
        element: <ShortlistedJobs />,
      },
    ],
  },
]);

export default router;
