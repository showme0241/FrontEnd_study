import { SerializedStyles, css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonProps } from "./Button";

const sizeCSS: { [key: string]: SerializedStyles } = {
    default: css`
        padding: 8px 16px;
    `,
};

const colorCSS: { [key: string]: SerializedStyles } = {
    default: css`
        background: #eee;
    `,
};

const shapeCSS: { [key: string]: SerializedStyles } = {
    default: css`
        border-radius: 5px;
    `,
};

export const Button = styled("button")<ButtonProps>`
    ${({ size }) => sizeCSS[size]}
    ${({ color }) => colorCSS[color]}
    ${({ shape }) => shapeCSS[shape]}
`;
