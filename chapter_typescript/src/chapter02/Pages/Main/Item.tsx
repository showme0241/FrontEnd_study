import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { funcContext } from "../../../App";

export default function Item() {
    const func = useContext(funcContext);
    const navigate = useNavigate();

    const location = useLocation();
    const { state: data } = location;

    const onDeleteHandler = () => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            func?.onRemove(data.id);
            navigate("/");
        }
    };

    return (
        data && (
            <>
                <div>{data.title}</div>
                <button onClick={() => navigate(`/edit/${data.id}`)}>
                    수정하기
                </button>
                <button onClick={onDeleteHandler}>삭제하기</button>
            </>
        )
    );
}
