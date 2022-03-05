import React, { useState } from "react";

const ThemeContext = React.createContext();

function ThemeContextProvider(props) {
    const [themeColor, setThemeColor] = useState("light");

    function toggle() {
        setThemeColor(prevTheme => prevTheme === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{themeColor, toggle}}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export {ThemeContextProvider, ThemeContext};