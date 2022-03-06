import React, { useState } from "react";

const ThemeContext = React.createContext();

function ThemeContextProvider(props) {
    const [ themeColor, setThemeColor ] = useState("light");

    function handleChange(event) {
        setThemeColor(event.target.value);
    };

    return (
        <ThemeContext.Provider value={{ themeColor, handleChange }}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export { ThemeContextProvider, ThemeContext };