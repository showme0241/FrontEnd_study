const baseURL = "https://jsonplaceholder.typicode.com";
const PATH = "/todos";

export function ErrorFallBack({ error, resetErrorBoundary }) {
    console.log({ error });

    return (
        <div>
            <p>{error.message}</p>
            <button onClick={resetErrorBoundary}>다시시도</button>
        </div>
    );
}

// state로 핸들링하는 경우에는 정상 실행 O
export function OnlyError() {
    throw new Error("에러붐붐붐");
}

export default function ErrorTest({ error, setError }) {
    /** 핸들러 내에서는 작동 fallback UI X
        const onError = () => {
            throw new Error("에러야");
        };
     */

    /** 아래 코드는 정상적으로 실행 O
        if (error) {
            throw new Error("오마이갓");
        }
    */

    /** Promise의 에러는 작동 X
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(`${baseURL}/dsfdsfsd`);
                console.log(res);
            } catch (err) {
                throw new Error("dsfdf");
            }
        };

        getData();
    }, [error]);
     */

    return (
        <div>
            <p>에러 테스트</p>
            {error ? <OnlyError /> : null}
            <button onClick={() => setError((prev) => !prev)}>에러 붐</button>
        </div>
    );
}
