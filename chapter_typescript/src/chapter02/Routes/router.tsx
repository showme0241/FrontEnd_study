import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Edit from "../Pages/Main/Edit";
import Item from "../Pages/Main/Item";
import Main from "../Pages/Main/Main";
import Register from "../Pages/Main/Register";

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
                path: "/detail/:idx",
                element: <Item />,
            },
            {
                path: "/edit/:idx",
                element: <Edit />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
]);

export default router;
