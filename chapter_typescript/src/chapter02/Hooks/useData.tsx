import axios from "axios";
import { useEffect, useRef, useState } from "react";

const base_url = "https://jsonplaceholder.typicode.com";
const path = "/todos";

export interface Data {
    completed?: boolean;
    id: number;
    title: string;
    userId?: number;
}

export default function useData() {
    const [data, setData] = useState<Data[]>([]);
    const ref = useRef(0);

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`${base_url}${path}`);

            setData(res.data.slice(0, 10));
        };

        getData();
    }, []);

    const onCreate = (title: string) => {
        let id = ref.current;

        setData((prev) => [...prev, { id, title }]);
        id += 1;
    };

    const onRemove = (id: number) => {
        setData(data.filter((it) => it.id !== id));
    };

    const onUpdate = (id: number, title: string) => {
        setData(data.map((it) => (it.id === id ? { id, title } : it)));
    };

    return { data, onCreate, onRemove, onUpdate };
}
