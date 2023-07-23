import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { stateContext } from "../../../App";

export default function Main() {
    const data = useContext(stateContext);
    const navigate = useNavigate();

    return (
        <div>
            {data?.map((it) => (
                <div>
                    <p>{it.title}</p>
                    <button
                        onClick={() =>
                            navigate(`/detail/${it.id}`, { state: it })
                        }
                    >
                        상세보기
                    </button>
                </div>
            ))}
            <button onClick={() => navigate("/register")}>등록하기</button>
        </div>
    );
}
