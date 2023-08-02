import styled from "@emotion/styled";

function ErrorFallBack({ error, resetErrorBoundary }) {
    return (
        <ErrorWrapper>
            <h2>에러가 발생했습니다요~</h2>
            <button onClick={resetErrorBoundary}>다시시도</button>
        </ErrorWrapper>
    );
}

export default ErrorFallBack;

const ErrorWrapper = styled.div`
    width: 100%;
`;
