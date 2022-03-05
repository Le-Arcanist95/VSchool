import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";

export default function Main(props) {
    const { themeColor, toggle } = useContext(ThemeContext);

    return (
        <Main className={`main ${ themeColor }-theme`}>
            <button className={`button ${ themeColor }-theme`} onClick={ toggle }> Switch Theme </button>
        </Main>
    );
};