import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import { ThemeContextProvider } from "./themeContext";

ReactDOM.render(
    // Wrap application in provider to create access to context within components.
        <ThemeContextProvider>
            <App />
        </ThemeContextProvider>
    , document.getElementById("root")
);