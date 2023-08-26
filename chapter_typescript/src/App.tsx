import React from "react";
import { ContextFunc } from "./@types/interface";
import { Data } from "./chapter02/Hooks/useData";
import FormTest from "./chapter03/FormTest";

export const funcContext = React.createContext<ContextFunc | null>(null);
export const stateContext = React.createContext<Data[] | null>(null);

export default function App() {
    return (
        <div>
            <FormTest />
        </div>
    );
}
