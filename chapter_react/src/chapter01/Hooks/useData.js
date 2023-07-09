import { useReducer, useRef } from "react";
import reducer from "./useRedecer";

export default function useData() {
    const [data, dispatch] = useReducer(reducer, []);
    const userId = useRef(0);

    const onCreate = (content) => {
        dispatch({
            type: "CREATE",
            data: {
                id: userId.current,
                content,
            },
        });

        userId.current += 1;
    };

    const onUpdate = (id, content) => {
        dispatch({
            type: "UPDATE",
            data: {
                id,
                content,
            },
        });
    };

    const onDelete = (targetId) => {
        dispatch({
            type: "Delete",
            id: targetId,
        });
    };

    return { data, onCreate, onDelete, onUpdate };
}
