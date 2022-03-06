import React, { useState } from "react";

const ThemeContext = React.createContext();

function ThemeContextProvider(props) {
    const [ themeColor, setThemeColor ] = useState("light");
    const themes = [
        {value: "light", label: "Light Theme"},
        {value: "dark", label: "Dark Theme"},
        {value: "seafoam", label: "Seafoam Theme"},
        {value: "maroon", label: "Maroon Theme"}
    ]

    function handleChange(newVal) {
        setThemeColor(newVal);
    };

    return (
        <ThemeContext.Provider value={{ themeColor, themes, handleChange }}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export { ThemeContextProvider, ThemeContext };