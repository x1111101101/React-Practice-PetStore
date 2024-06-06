import React from "react"
import ReactDOM from "react-dom"
import App from "./app/App"

const rootElement = document.getElementById("root");
console.log("ROOT: " + rootElement);
ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <div><App/></div>
    </React.StrictMode>
)
