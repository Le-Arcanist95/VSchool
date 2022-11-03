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
    // Function that changes state to a selected theme value 
    function handleChange(e) {
        setThemeColor(e.value);
    };

    return (
        // Create provider and set variables to be accessed
        <ThemeContext.Provider value={{ themeColor, themes, handleChange }}>    
            {props.children}
        </ThemeContext.Provider>
    );
};
// Export function for wrapping and context for destructuring
export { ThemeContextProvider, ThemeContext };