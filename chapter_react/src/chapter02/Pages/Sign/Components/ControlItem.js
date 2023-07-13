import styled from "@emotion/styled";
import Input from "../../../Components/Input/Input";

const Label = {
    email: "이메일 계정",
    nickname: "닉네임",
    pw: "비밀번호",
    pwConfirm: "비밀번호 확인",
};

export default function ControlItem({ field, error }) {
    const { name, value, onChange } = field;

    return (
        <S.Wrapper>
            <label for={name}>
                {Label[name]}
                <Input
                    name={name}
                    type={name.includes("pw") ? "password" : "text"}
                    placeholder={`${Label[name]} 입력`}
                    size="default"
                    value={value}
                    onChange={onChange}
                />
            </label>
            {error && <p className="error-message">{error}</p>}
        </S.Wrapper>
    );
}

const Wrapper = styled.div`
    min-width: 280px;
    margin: 0 auto;
    margin-bottom: 20px;

    &:last-of-type {
        margin-bottom: 0;
    }

    & > label {
        display: flex;
        flex-direction: column;

        & > input {
            margin-top: 5px;
        }
    }

    & > .error-message {
        margin-top: 5px;
        color: #ff6565;
    }
`;

const S = {
    Wrapper,
};
