import * as S from "./Button.style";

export interface ButtonProps {
    size: string;
    color: string;
    shape: string;
    children: string;
    onClick: () => void;
}

export default function Button(props: ButtonProps) {
    const { size, color, shape, children, onClick, ...rest } = props;

    return (
        <S.Button
            size={size}
            color={color}
            shape={shape}
            onClick={onClick}
            {...rest}
        >
            {children}
        </S.Button>
    );
}
