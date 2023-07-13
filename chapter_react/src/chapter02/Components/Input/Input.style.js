import { css } from "@emotion/react";
import styled from "@emotion/styled";

const sizeCSS = {
    default: css`
        width: 100%;
        height: 32px;
    `,
};

const shapeCSS = {
    default: css``,
};

const colorCSS = {
    default: css``,
    none: css``,
};

export const Input = styled.input`
    ${({ size }) => sizeCSS[size]}
    ${({ shape }) => shapeCSS[shape]}
    ${({ color }) => colorCSS[color]}
    box-sizing: border-box;
`;
