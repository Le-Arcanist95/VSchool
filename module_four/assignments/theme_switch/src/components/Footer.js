import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";

export default function Footer(props) {
    const { themeColor } = useContext(ThemeContext);

    return (
        <Footer className={`${ themeColor === "light" ? "dark" : "light" }-theme`}>
            <h4>Hi there, I'm contrast!</h4>
        </Footer>
    )
};