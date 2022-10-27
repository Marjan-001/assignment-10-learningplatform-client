import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import Category from "../pages/Category/Category";
import Checkout from "../pages/CheckOut/Checkout";
import CourseDetails from "../pages/courseDetails/CourseDetails";
import Courses from "../pages/Courses/Courses";
import ErrorPage from "../pages/ErrorPage";
import FAQ from "../pages/FAQ/FAQ";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>

            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/courses',
                loader: () => fetch(`https://assignment-10-learning-platform-server.vercel.app/courses`),
                element: <Courses></Courses>

            },
            {
                path: '/categories/:id',
                loader: ({ params }) => fetch(`https://assignment-10-learning-platform-server.vercel.app/categories${params.id}`),
                element: <Category></Category>
            },

            {
                path: '/faq',
                element: <FAQ></FAQ>

            },

            {
                path: '/blog',
                element: <Blog></Blog>

            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`https://assignment-10-learning-platform-server.vercel.app/category/${params.id}`),
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/checkout',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
            }
        ]

    }
])