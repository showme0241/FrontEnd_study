import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import worker from "./chapter03/__mocks__/browser";

const env = process.env;

if (env.NODE_ENV === "development") {
    worker.start();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
