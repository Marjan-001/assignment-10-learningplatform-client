import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import Category from "../pages/Category/Category";
import CourseDetails from "../pages/courseDetails/CourseDetails";
import Courses from "../pages/Courses/Courses";
import FAQ from "../pages/FAQ/FAQ";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
                path: '/coursedetails',
                element: <CourseDetails></CourseDetails>
            }
        ]

    }
])