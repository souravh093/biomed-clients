import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import BlogDetails from "../Pages/Blogs/BlogDetails/BlogDetails";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import Seller from "../Pages/Seller/Seller";
import Contact from "../Pages/Contact/Contact";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
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
                path: "/seller",
                element: <Seller />
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            }
        ]
    }
])

export default router;