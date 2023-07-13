import { css } from "@emotion/react";
import styled from "@emotion/styled";

const sizeCSS = {
    default: css`
        padding: 8px 16px;
    `,
};

const shapeCSS = {
    default: css`
        border: none;
        border-radius: 5px;
    `,
};

const colorCSS = {
    default: css`
        background: #eee;
    `,

    none: css`
        background: #fff;
    `,
};

export const Button = styled.button`
    ${({ size }) => sizeCSS[size]}
    ${({ shape }) => shapeCSS[shape]}
    ${({ color }) => colorCSS[color]}
    cursor: pointer;
    box-sizing: border-box;
`;
