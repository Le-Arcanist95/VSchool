import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";

function NavBar(props) {
    const { themeColor } = useContext(ThemeContext);

    return (
        <navbar className={`${ themeColor }-theme`}>
            <ul>
                <li> Home </li>
                <li> About </li>
                <li> Contact </li>
            </ul>
        </navbar>
    );
};

export default NavBar;