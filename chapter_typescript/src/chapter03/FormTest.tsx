import { useForm } from "react-hook-form";
import { CustomInput } from "./CustomInput";

export interface FormValues {
    email: string;
    password: string;
    nickName: string;
}

export const FormTest = () => {
    const { control, handleSubmit } = useForm<FormValues>({
        defaultValues: {
            email: "",
            password: "",
            nickName: "",
        },
    });
    const onSubmitHandler = (data: any) => {};

    return (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
            <CustomInput control={control} name="email" label="이메일 계정" />
            <CustomInput control={control} name="password" label="비밀번호" />
            <CustomInput control={control} name="nickName" label="닉네임" />
        </form>
    );
};
