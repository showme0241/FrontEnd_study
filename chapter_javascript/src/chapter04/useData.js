import axios from "axios";
import { useEffect, useState } from "react";

const base_url = "https://jsonplaceholder.typicode.com";
const PATH = "/todos";

export default function useData() {
    const [isData, setIsData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            // const res = await fetch(`${base_url}${PATH}`);
            // const data = await res.json();
            const res = await axios.get(`${base_url}${PATH}`);
            const { data } = res;

            try {
                setIsData(data);
            } catch (error) {
                console.log("오류 발생되었습니다.");
            }
        };

        getData();
    }, []);

    return { isData };
}
