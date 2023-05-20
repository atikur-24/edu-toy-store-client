import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignIn from "../SignIn/SignIn";
import AddToys from "../Pages/AddToys/AddToys";
import Blogs from "../Pages/Blogs/Blogs";
import AllToy from "../Pages/AllToy/AllToy";
import SignUp from "../Pages/SignUp/SignUp";
import MyToys from "../Pages/MyToys/MyToys";

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
                path: 'myToys',
                element: <MyToys />
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