import styled from "@emotion/styled";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { validationRules } from "../../Consts/validationRules";
import { axiosInstance } from "../../__mocks__/Apis/@core";
import ControlItem from "./Components/ControlItem";

const PATH = "/api/user/login";

export default function SignIn() {
    const { watch, control, handleSubmit } = useForm({
        defaultValues: {
            email: "",
            pw: "",
        },
    });
    const navigate = useNavigate();

    const email = watch("email");
    const pw = watch("pw");

    const onSubmitHandler = async (data) => {
        const { email, pw } = data;

        try {
            const res = await axiosInstance.post(PATH, { email, pw });

            if (res.status === 200) {
                const user = res.data;
                localStorage.setItem("login", JSON.stringify(user));
                // 로그인 환경에서 set한 user를 가지고 get하여 사용이 용이하게끔
                // 모듈화 시켜놓으면 베스트

                navigate("/");
            }
        } catch (error) {
            const { message } = error.response.data;
            console.log(message);
        }
    };

    return (
        <S.Wrapper>
            <S.Container>
                <h5>리액트 훅폼 : 로그인</h5>
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
