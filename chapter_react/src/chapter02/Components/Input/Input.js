import * as S from "./Input.style";

export default function Input(props) {
    const { name, size, ...rest } = props;
    return <S.Input name={name} size={size} {...rest} />;
}
