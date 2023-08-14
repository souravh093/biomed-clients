import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import BlogDetails from "../Pages/Blogs/BlogDetails/BlogDetails";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import Terms from "../components/Terms/Terms";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Seller from "../Pages/Seller/Seller";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Layout/Dashboard";
import DashboardHome from "../Dashboard/DashboardHome/DashboardHome";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/blogs",
                element: <Blogs />
            },
            {
                path: "/blogDetails/:id",
                element: <BlogDetails />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path:"/terms",
                element:<Terms></Terms>
            },
            {
                path: "/seller",
                element: <Seller />
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "/dashboard/dashboard-home",
                element: <DashboardHome />
            }
        ]
    }
])

export default router;