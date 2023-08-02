import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com";
const PATH = "/todos";

const QueryKey = {
    getData: "getData",
};

export default function QueryData() {
    const { isLoading, error, data } = useQuery(
        [QueryKey.getData],
        async () => {
            const res = await axios.get(`${baseURL}${PATH}`);
            return res.data.slice(0, 10);
        }
    );

    if (isLoading) return "Loading...";
    if (error) return "An error has...";

    // console.log(data);

    return (
        <div>
            {data.map((it) => (
                <p>{it.id}</p>
            ))}
        </div>
    );
}
