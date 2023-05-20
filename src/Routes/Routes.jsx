import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignIn from "../SignIn/SignIn";
import AddToys from "../Pages/AddToys/AddToys";
import Blogs from "../Pages/Blogs/Blogs";
import AllToy from "../Pages/AllToy/AllToy";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'addToys',
                element: <AddToys />
            },
            {
                path: 'allToy',
                element: <AllToy />
            },
            {
                path: 'blogs',
                element: <Blogs />
            }
        ]
    },
    {
        path: 'signUp',
        element: <SignUp />
    },
    {
        path: 'signIn',
        element: <SignIn />
    }
])

export default router;