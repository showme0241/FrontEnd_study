const env = process.env;
const PATH = "/comments";

const FetchApi = {
    async getData(queryString) {
        const res = await fetch(
            env.REACT_APP_BACKEND_URL + PATH + "?" + queryString,
            {
                method: "GET",
            }
        );

        // json 객체화
        const data = res.json();
        return data;
    },
};

export default FetchApi;
