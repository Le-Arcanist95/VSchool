import React, { useContext } from "react";
import Select from "react-select";
import { ThemeContext } from "../themeContext";

function Main() {
    const { themeColor, themes, handleChange } = useContext(ThemeContext);

    return (
        <main className={`${themeColor}-theme`}>
            <div className={`content ${themeColor}-theme`}>
                <label> Choose a theme: 
                    <Select 
                        className={`selectInput ${themeColor}-theme`}
                        options={themes}
                        onChange={handleChange}
                        value={themeColor}
                    />
                </label>
            </div>
        </main>
    );
};

export default Main;