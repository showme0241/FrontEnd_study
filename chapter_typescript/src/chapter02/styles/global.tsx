import { Global, css } from "@emotion/react";

const global = css`
    * {
        margin: 0;
        padding: 0;
    }

    html: {
        font-size: 62.5%;
    }
`;

export default function GlobalStyle() {
    return <Global styles={global} />;
}

/**
 * [GlobalStyle]
 * Styled-component 와 Emotion의 차이
 *
 * 1. SC : createGlobalStyles`` 함수 이용 (prettier 적용 X)
 * 2. EM : Global 컴포넌트, css 함수 이용 (prettier 적용 O)
 */
