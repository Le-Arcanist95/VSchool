import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";

function NavBar() {
    const { themeColor } = useContext(ThemeContext);

    return (
        <nav className={`${themeColor}-theme`}>
            <ul>
                <li> Home </li>
                <li> About </li>
                <li> Contact </li>
            </ul>
        </nav>
    );
};

export default NavBar;