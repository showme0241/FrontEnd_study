import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorTest, { ErrorFallBack } from "../../../chapter05/ErrorTest";

export default function Main() {
    const [error, setError] = useState(false);

    return (
        <ErrorBoundary
            FallbackComponent={ErrorFallBack}
            onReset={() => setError(false)}
        >
            <ErrorTest error={error} setError={setError} />
        </ErrorBoundary>
    );
}
