import { createBrowserRouter } from "react-router-dom";
import Layout from "../../chapter03/Components/Layout/Layout";
import Main from "../../chapter03/Pages/Main/Main";
import Test from "../Pages/Error/Test";
import SignIn from "../Pages/Sign/SignIn";
import SignUp from "../Pages/Sign/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Main />,
            },
            {
                path: "/test",
                element: <Test />,
            },
            {
                path: "/login",
                element: <SignIn />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
        ],
    },
]);

export default router;
