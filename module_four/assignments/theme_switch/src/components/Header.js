import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";
import NavBar from "./NavBar";

function Header(props) {
    const { themeColor } = useContext(ThemeContext);
    return (
        <header className={`${ themeColor }-theme`}>
            <h1> The { themeColor.charAt(0).toUpperCase() + themeColor.split(1) } Side </h1>
            <NavBar />
        </header>
    );
};

export default Header;