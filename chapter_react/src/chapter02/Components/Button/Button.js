import * as S from "./Button.style";

export default function Button(props) {
    const { children, size, shape, color, onClick, ...rest } = props;

    return (
        <S.Button
            size={size}
            shape={shape}
            color={color}
            onClick={onClick}
            {...rest}
        >
            {children}
        </S.Button>
    );
}
