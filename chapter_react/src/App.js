import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./chapter03/Routes/router";
import GlobalStyle from "./chapter03/Styles/global";

function App() {
    return (
        <>
            <GlobalStyle />
            <RouterProvider router={router} />
        </>
    );
}

export default App;
