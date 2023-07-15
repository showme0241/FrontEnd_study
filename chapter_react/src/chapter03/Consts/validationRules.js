import { REGEX } from "./regex";

export const validationRules = {
    email: {
        required: "아이디를 입력해주세요.",
        pattern: {
            value: REGEX.email,
            message: "올바른 이메일 형식으로 입력해주세요.",
        },
    },
    nickname: {
        required: "닉네임을 입력해주세요.",
        pattern: {
            value: REGEX.nickname,
            message: "최소 1글자 이상 입력해주세요.",
        },
    },
    pw: {
        required: "비밀번호를 입력해주세요.",
        minLength: {
            value: 8,
            message: "최소 8글자 이상 입력해주세요.",
        },
        pattern: {
            value: REGEX.password,
            message: "영문과 숫자, 특수문자를 조합해서 입력해주세요.",
        },
    },
    pwConfirm: {
        required: "비밀번호를 확인해주세요.",
        minLength: {
            value: 8,
            message: "최소 8글자 이상 입력해주세요.",
        },
        pattern: {
            value: REGEX.password,
            message: "영문과 숫자, 특수문자를 조합해서 입력해주세요.",
        },
    },
};
