import axios from "axios";

const env = process.env;
const PATH = "/posts";

// axios 기본 설정
const axiosInstance = axios.create({
    baseURL: env.REACT_APP_BACKEND_URL, // 도메인
    withCredentials: true,
});

const AxiosApi = {
    getData() {
        return axiosInstance.get(PATH);
    },
};

export default AxiosApi;
