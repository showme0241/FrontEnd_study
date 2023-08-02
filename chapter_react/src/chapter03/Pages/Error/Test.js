import { useNavigate } from "react-router-dom";

export default function Test() {
    const navigate = useNavigate();

    try {
        throw new Error("에러 발생!");
    } catch (error) {
        console.log(error);
    }

    return (
        <div>
            <p>테스트에요</p>
            <button onClick={() => navigate("/")}>돌아가기</button>
        </div>
    );
}
