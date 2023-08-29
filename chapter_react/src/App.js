import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import FormElement from "./chapter06/FormElement";

const schema = yup.object({
    email: yup
        .string()
        .email("이메일 형식이 아닙니다.")
        .required("이메일을 입력해주세요."),
    password: yup
        .string()
        .required("비밀번호를 입력해 주세요")
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/,
            "8글자 이상 영문자, 숫자, 특수문자를 조합해서 입력하세요"
        ),
});

function App() {
    const { control, handleSubmit } = useForm({
        resolver: yupResolver(schema),
        defaultValues: { email: "", password: "" },
    });

    const onSubmitHandler = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
            <FormElement control={control} name="email" label="이메일 계정" />
            <FormElement control={control} name="password" label="비밀번호" />
            <button type="submit">제출</button>
        </form>
    );
}

export default App;
