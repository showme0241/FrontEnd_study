import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./chapter03/Routes/router";
import GlobalStyle from "./chapter03/Styles/global";

function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyle />
            <RouterProvider router={router} />
        </QueryClientProvider>
    );
}

export default App;
