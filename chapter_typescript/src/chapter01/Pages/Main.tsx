import styled from "@emotion/styled";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button/Button";

const dummyList = [
    {
        id: 1,
        content: "안녕",
    },
    {
        id: 2,
        content: "실밍",
    },
    {
        id: 3,
        content: "우아",
    },
    {
        id: 4,
        content: "배곱",
    },
    {
        id: 5,
        content: "잘가",
    },
];

interface Data {
    id: number | undefined;
    content: string | undefined;
    // 옵셔널 프로퍼티
    feature?: string | undefined;
}

export default function Main() {
    const [data, setData] = useState<Data[]>(dummyList);
    const [content, setContent] = useState<string>();
    const [feat, setFeat] = useState<string>();

    const navigate = useNavigate();
    const userId = useRef(0);

    const onClickAdd = () => {
        setData([
            ...data,
            {
                id: userId.current,
                content: content,
                feature: feat,
            },
        ]);

        userId.current += 1;
    };

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
    };

    return (
        <div>
            {data.map((it) => {
                return (
                    <div>
                        {it.id} {it.content}
                        {it.feature && <p>{it.feature}</p>}
                    </div>
                );
            })}
            <input value={content} onChange={onChangeInput} />
            <input value={feat} onChange={(e) => setFeat(e.target.value)} />
            <StyledButton
                size="default"
                color="default"
                shape="default"
                onClick={() => navigate("/list")}
            >
                다른 페이지가기
            </StyledButton>
            <StyledButton
                size="default"
                color="default"
                shape="default"
                onClick={onClickAdd}
            >
                만들기
            </StyledButton>
        </div>
    );
}

const StyledButton = styled(Button)``;
