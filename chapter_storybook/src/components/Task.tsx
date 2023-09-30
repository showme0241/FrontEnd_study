import { PropsWithChildren } from "react";
import { TaskType } from "./Task.type";

export const Task = ({
    id,
    title,
    state,
    children,
}: PropsWithChildren<TaskType>) => {
    return (
        <div>
            <p>{id}</p>
            <p>{title}</p>
            <p>{state}</p>
        </div>
    );
};
