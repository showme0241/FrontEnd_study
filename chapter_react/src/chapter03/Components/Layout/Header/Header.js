import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
import Logo from "./Components/Logo";

export default function Header() {
    const navigate = useNavigate();

    const goToSignUp = () => {
        navigate("/signup");
    };

    const goToSignIn = () => {
        navigate("/login");
    };

    return (
        <S.Wrapper>
            <S.Container>
                <Logo />
                <S.SignContainer>
                    <Button
                        size="default"
                        color="none"
                        shape="default"
                        onClick={goToSignIn}
                    >
                        로그인
                    </Button>
                    <Button
                        size="default"
                        color="default"
                        shape="default"
                        onClick={goToSignUp}
                    >
                        회원가입
                    </Button>
                </S.SignContainer>
            </S.Container>
        </S.Wrapper>
    );
}

const Wrapper = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
`;

const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const SignContainer = styled.div`
    & > button:first-of-type {
        margin-right: 16px;
    }
`;

const S = {
    Wrapper,
    Container,
    SignContainer,
};
