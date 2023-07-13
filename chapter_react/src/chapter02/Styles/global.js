import { Global, css } from "@emotion/react";

const global = css`
    * {
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
    }
`;

export default function GlobalStyle() {
    return <Global styles={global} />;
}
