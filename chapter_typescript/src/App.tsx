import React from "react";
import { RouterProvider } from "react-router-dom";
import { ContextFunc, ContextItem } from "./@types/interface";
import useData from "./chapter02/Hooks/useData";
import router from "./chapter02/Routes/router";
import GlobalStyle from "./chapter02/styles/global";

export const funcContext = React.createContext<ContextFunc | null>(null);
export const stateContext = React.createContext<ContextItem[] | null>(null);

export default function App() {
    const { data, onCreate, onRemove, onUpdate } = useData();

    return (
        <stateContext.Provider value={data}>
            <funcContext.Provider value={{ onCreate, onRemove, onUpdate }}>
                <GlobalStyle />
                <RouterProvider router={router} />
            </funcContext.Provider>
        </stateContext.Provider>
    );
}
