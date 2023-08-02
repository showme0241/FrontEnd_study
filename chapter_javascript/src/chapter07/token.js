import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "url",
    timeout: 5000, // 응답시간 5초 제한
    withCredentials: true,
});

// axios 응답 전에 인터셉터가 가로채서 선요청과 선응답
axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
    },

    // 에러
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => response,
    // 에러
    async (err) => {
        const originalReq = err.config;

        if (originalReq.timeout > 5000) {
            /*
                응답시간 초과 로직
                modalState : default 수행
            */
            return Promise.reject(err);
        }

        if (err.message === "Network Error") {
            // 네트워크 에러
            return Promise.reject(err);
        }

        // 403 : 인가 실패 (토큰 검증 여부 탈락)
        if (err.response.status === "403") {
            /*
                로그아웃 로직
                localStorage.removeItem()...
                userLogout()
            */
            return Promise.reject(err);
        }

        // 401 : 인증 실패 (unAuthorized(권한 X)), ._retry : 재요청
        // 백엔드에서 인증실패가 뜨기 전, 1분전에 401에러 전달
        if (err.response.status === "401" && !originalReq._retry) {
            /*
                unAuthorized > accessToken을 담아서 재인증 로직
                
                ▼ 바로 refreshToken 발행 및 로컬 스토리지 저장
                ▼ 기존 accessToken => refreshToken으로 변경
            */

            const res = await axiosInstance.get("refresh 경로에 get 요청");
            const { refreshToken } = res?.data;

            originalReq._retry = true; // 재시도 표시

            // localStorage로 token set하고, 재요청 로직 수행
            originalReq.headers["Authorization"] = `Bearer ${refreshToken}`;
            return await axiosInstance(originalReq);
        }

        return Promise.reject(err);
    }
);
