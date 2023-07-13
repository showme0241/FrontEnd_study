import styled from "@emotion/styled";
import { Controller, useForm } from "react-hook-form";
import Button from "../../Components/Button/Button";
import ControlItem from "./Components/ControlItem";
import { REGEX } from "./Components/Regex";

export default function SignIn() {
    const { watch, control, handleSubmit } = useForm();

    const email = watch("email");
    const pw = watch("pw");

    const onSubmitHandler = (data) => {
        const { email, pw } = data;

        console.log(data);
    };

    return (
        <S.Wrapper>
            <S.Container>
                <h5>리액트 훅폼 : 로그인</h5>
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <Controller
                        name="email"
                        control={control}
                        rules={{
                            required: "아이디를 입력해주세요.",
                            pattern: {
                                value: REGEX.email,
                                message: "올바른 이메일 형식을 입력해주세요.",
                            },
                        }}
                        render={({ field, fieldState: { error } }) => {
                            return (
                                <ControlItem
                                    field={field}
                                    error={error?.message}
                                />
                            );
                        }}
                    />
                    <Controller
                        name="pw"
                        control={control}
                        rules={{
                            required: "비밀번호를 입력해주세요.",
                            pattern: {
                                value: REGEX.password,
                                message:
                                    "영문과 숫자, 특수문자를 조합해서 입력해주세요.",
                            },
                            minLength: {
                                value: "8",
                                message: "최대 8글자 이상 입력해주세요.",
                            },
                        }}
                        render={({ field, fieldState: { error } }) => {
                            return (
                                <ControlItem
                                    field={field}
                                    error={error?.message}
                                />
                            );
                        }}
                    />
                    <S.StyledButton
                        size="default"
                        color="default"
                        shape="default"
                        type="submit"
                        disabled={email === "" || pw === "" ? true : false}
                    >
                        로그인
                    </S.StyledButton>
                </form>
            </S.Container>
        </S.Wrapper>
    );
}

const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    margin-top: 80px;
`;

const Container = styled.div`
    & > h5 {
        margin-bottom: 40px;
    }

    & > form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const StyledButton = styled(Button)`
    margin-top: 40px;
`;

const S = {
    Wrapper,
    Container,
    StyledButton,
};
