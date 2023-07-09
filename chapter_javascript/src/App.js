import { useEffect, useState } from "react";
import AxiosApi from "./chpater01/axios";
import FetchApi from "./chpater01/fetch";

function App() {
    // 데이터 저장소
    const [data, setData] = useState(null);
    const [fetchData, setFetchData] = useState(null);

    // Axios
    useEffect(() => {
        const getMainData = async () => {
            try {
                const res = await AxiosApi.getData();
                const { data } = res;

                setData(data);
            } catch (error) {
                console.error("오류 발생 : ", error);
            }
        };

        getMainData();
    }, []);

    // Fetch
    useEffect(() => {
        const getMainData = async () => {
            const params = { postId: 1 };
            const queryString = new URLSearchParams(params).toString();

            try {
                const res = await FetchApi.getData(queryString);

                setFetchData(res);
            } catch (error) {
                console.error("오류 발생 : ", error);
            }
        };

        getMainData();
    }, []);

    console.log(data);
    console.log(fetchData);

    return <div className="App"></div>;
}

export default App;
