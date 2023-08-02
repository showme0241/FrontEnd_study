import { useNavigate } from "react-router-dom";
import QueryData from "../../../chapter04/react-query";

export default function Main() {
    const navigate = useNavigate();

    return (
        <div>
            <QueryData />
            <button onClick={() => navigate("test")}>테스트가기</button>
        </div>
    );
}
