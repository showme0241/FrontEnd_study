import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../../App";

export default function Main() {
    const navigate = useNavigate();
    const data = useContext(DiaryStateContext);

    return (
        <div>
            {data &&
                data.map((it) => {
                    return (
                        <p key={it.id}>
                            {it.id}번의 {it.content}
                        </p>
                    );
                })}
            <button onClick={() => navigate("/register")}>등록하기</button>
        </div>
    );
}
