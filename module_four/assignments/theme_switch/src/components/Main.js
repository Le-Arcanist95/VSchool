import React, { useContext } from "react";
import Select from "react-select";
import { ThemeContext } from "../themeContext";

function Main() {
    const { themeColor, themes, handleChange } = useContext(ThemeContext);

    return (
        <main className={`main ${themeColor}-theme`}>
            <div className={`decoration ${themeColor}-theme`}></div>
            <label> Choose a theme: 
                <Select 
                    className={`selectInput ${themeColor}-theme`}
                    options={themes}
                    onChange={handleChange}
                    value={themeColor}
                />
            </label>
        </main>
    );
};

export default Main;