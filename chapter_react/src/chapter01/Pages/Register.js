import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../../App";

export default function Register() {
    const [content, setContent] = useState();
    const dispatch = useContext(DiaryDispatchContext);
    const navigate = useNavigate();

    const onCreateContent = () => {
        if (!content) return;

        dispatch.onCreate(content);
        setContent("");
        navigate("/");
    };

    return (
        <div>
            <textarea
                placeholder="what is 뭔들"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button onClick={onCreateContent}>생성</button>
        </div>
    );
}
