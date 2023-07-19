import { useRef, useState } from "react";
import { ContextItem } from "../../@types/interface";

export default function useData() {
    const [data, setData] = useState<ContextItem[]>([]);
    const ref = useRef(0);

    const onCreate = (title: string, content: string) => {
        let id = ref.current;

        setData((prev) => [...prev, { id, title, content }]);
        id += 1;
    };

    const onRemove = (id: number) => {
        setData(data.filter((it) => it.id !== id));
    };

    const onUpdate = (id: number, title: string, content: string) => {
        setData(data.map((it) => (it.id === id ? { id, title, content } : it)));
    };

    return { data, onCreate, onRemove, onUpdate };
}
