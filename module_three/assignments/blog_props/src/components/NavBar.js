import React from "react";
function Navbar() {
    const navBarStyling = {
        display: "flex",
        justifyContent: "space-between",
        width: "65%",
        margin: "auto"
    };
    const titleStyling = {
        margin: 20,
        fontSize: 20,
        fontWeight: "bold",
        textDecoration: "none",
        color: "#FFFFFF"
    };
    const listStyling = {
        display: "flex",
        listStyleType: "none"
    };
    const listItemStyling = {
        margin: 10
    };
    const linkStyling = {
        color: "#FFFFFF",
        textDecoration: "none",
        fontWeight: "bold"
    };

    return (
        <div style={navBarStyling}>
            <a style={titleStyling} href="sample.link">Start Bootstrap</a>
            <ul style={listStyling}>
                <li style={listItemStyling}><a style={linkStyling} href="sample.link">Home</a></li>
                <li style={listItemStyling}><a style={linkStyling} href="sample.link">About</a></li>
                <li style={listItemStyling}><a style={linkStyling} href="sample.link">Sample Post</a></li>
                <li style={listItemStyling}><a style={linkStyling} href="sample.link">Contact</a></li>
            </ul>
        </div>
    );
};

export default Navbar;