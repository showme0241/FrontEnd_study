import { forwardRef } from "react";
import * as S from "./Input.style";

function Input(props, ref) {
    const { name, size, ...rest } = props;
    return <S.Input name={name} ref={ref} size={size} {...rest} />;
}

export default forwardRef(Input);
