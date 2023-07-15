import styled from "@emotion/styled";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { validationRules } from "../../Consts/validationRules";
import { axiosInstance } from "../../__mocks__/Apis/@core";
import ControlItem from "./Components/ControlItem";

const PATH = "/api/user";

export default function SignUp() {
    const navigate = useNavigate();
    const { watch, control, handleSubmit } = useForm({
        defaultValues: {
            email: "",
            nickname: "",
            pw: "",
            pwConfirm: "",
        },
    });

    const email = watch("email");
    const nickname = watch("nickname");
    const pw = watch("pw");
    const pwConfirm = watch("pwConfirm");

    const onSubmitHandler = async (data) => {
        const User = {
            email: data.email,
            nickname: data.nickname,
            password: data.pw,
        };

        try {
            // 서버 전송 및 응답
            const res = await axiosInstance.post(PATH, User);
            const { message } = res.data;

            if (message === "success") {
                navigate("/login");
            }
        } catch (error) {
            console.log("중복된 아이디 혹은 닉네임이 있습니다.");
        }
    };

    return (
        <S.Wrapper>
            <S.Container>
                <h5>리액트 훅폼 : 회원가입</h5>
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <Controller
                        name="email"
                        control={control}
                        rules={validationRules.email}
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
                        name="nickname"
                        control={control}
                        rules={validationRules.nickname}
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
                        rules={validationRules.pw}
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
                        name="pwConfirm"
                        control={control}
                        rules={
                            (validationRules.pwConfirm,
                            {
                                validate: (value) =>
                                    value === pw ||
                                    "입력한 비밀번호와 일치하지 않습니다.",
                            })
                        }
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
                        disabled={
                            email === "" ||
                            nickname === "" ||
                            pw === "" ||
                            pwConfirm === ""
                                ? true
                                : false
                        }
                    >
                        회원가입
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
