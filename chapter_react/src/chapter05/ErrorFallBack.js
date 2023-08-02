import styled from "@emotion/styled";

function ErrorFallBack({ error, resetErrorBoundary }) {
    console.log(error);

    return (
        <ErrorWrapper>
            <h2>에러가 발생했습니다요~</h2>
        </ErrorWrapper>
    );
}

export default ErrorFallBack;

const ErrorWrapper = styled.div`
    width: 100%;
`;
