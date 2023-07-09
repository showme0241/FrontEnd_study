import { createBrowserRouter } from "react-router-dom";
import ListItem from "../Pages/ListItem";
import Main from "../Pages/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/list",
                element: <ListItem />,
            },
        ],
    },
]);

export default router;
