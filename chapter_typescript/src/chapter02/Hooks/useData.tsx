import axios from "axios";
import { useEffect, useMemo, useRef, useState } from "react";

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
    const dataId = useRef(0);

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`${base_url}${path}`);
            const dataList = res.data.slice(0, 10);
            setData(dataList);
        };

        getData();
    }, []);

    const sortedData = useMemo(() => {
        const result = data.slice().sort((a, b) => b.id - a.id);
        dataId.current = Number(result[0]?.id + 1);

        return result;
    }, [data]);

    const onCreate = (title: string) => {
        setData((prev) => [...prev, { id: dataId.current, title }]);
    };

    const onRemove = (id: number) => {
        setData(sortedData.filter((it) => it.id !== id));
    };

    const onUpdate = (id: number, title: string) => {
        setData(sortedData.map((it) => (it.id === id ? { id, title } : it)));
    };

    return { sortedData, onCreate, onRemove, onUpdate };
}
