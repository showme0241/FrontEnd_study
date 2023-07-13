import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

export default function Logo() {
    const navigate = useNavigate();

    return <Heading onClick={() => navigate("/")}>LOGO</Heading>;
}

const Heading = styled.h1`
    cursor: pointer;
`;
