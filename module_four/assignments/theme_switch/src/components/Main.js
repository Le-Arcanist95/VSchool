import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";

function Main() {
    const { themeColor, handleChange } = useContext(ThemeContext);

    return (
        <Main className={`main ${themeColor}-theme`}>
            <label> Choose a theme: 
                <select 
                    className={`selectInput ${themeColor}-theme`} 
                    onChange={handleChange}
                    value={themeColor}
                >
                    <option value="light"> Light Theme </option>
                    <option value="dark"> Dark Theme </option>
                    <option value="seafoam"> Seafoam Theme</option>
                    <option value="maroon"> Maroon Theme </option>
                </select>
            </label>
        </Main>
    );
};

export default Main;