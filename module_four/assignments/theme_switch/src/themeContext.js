import React, { useState } from "react";

const ThemeContext = React.createContext();

function ThemeContextProvider(props) {
    const [ themeColor, setThemeColor ] = useState("light");

    function toggleTheme() {
        setThemeColor(prevTheme => prevTheme === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{ themeColor, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export { ThemeContextProvider, ThemeContext };