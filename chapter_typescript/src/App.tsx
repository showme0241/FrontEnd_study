import { RouterProvider } from "react-router-dom";
import router from "./chapter02/Routes/router";

export default function App() {
    return <RouterProvider router={router} />;
}
