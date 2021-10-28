import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

import { BrowserRouter as Router } from "react-router-dom"

import { StoreProvider } from "./context/StoreContext"

import App from "./App"

ReactDOM.render(
    <React.StrictMode>
        <StoreProvider>
            <Router>
                <App></App>
            </Router>
        </StoreProvider>
    </React.StrictMode>,
    document.getElementById("root")
)
//reportWebVitals()
