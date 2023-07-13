import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Main from "../Pages/Main";
import Register from "../Pages/Register";

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
                path: "/register",
                element: <Register />,
            },
        ],
    },
]);
