import React from "react";
import { RouterProvider } from "react-router-dom";
import useData from "./chapter01/Hooks/useData";
import router from "./chapter01/Routes/router";

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function App() {
    const { data, onCreate, onDelete, onUpdate } = useData();

    return (
        <DiaryStateContext.Provider value={data}>
            <DiaryDispatchContext.Provider
                value={{ onCreate, onDelete, onUpdate }}
            >
                <RouterProvider router={router} />
            </DiaryDispatchContext.Provider>
        </DiaryStateContext.Provider>
    );
}

export default App;
