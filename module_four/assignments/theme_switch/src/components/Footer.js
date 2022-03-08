import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";

function Footer() {
    const { themeColor } = useContext(ThemeContext);

    return (
        <footer className={`${themeColor}-theme`}>
            <h4>Hi there, I'm contrast!</h4>
        </footer>
    )
};
export default Footer;