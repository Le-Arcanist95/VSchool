import React from "react";
import Navbar from "./NavBar";
import background from "../resources/home-bg.jpg"

function Header() {
    const layoutStyling = {
        display: "flex",
        flexDirection: "column",
        background: `url(${background})`,
        height: 530,
        justifyContent: "center",
        alignItems: "center"
    };
    const headerStyling = {
        marginBottom: 200,
        textAlign: "center",
        color: "#FFFFFF"
    }

    return (
        <div style={layoutStyling}>
            <Navbar />
            <div style={headerStyling}>
                <h1 style={{fontSize: 80, margin: "10px auto"}}>Clean Blog</h1>
                <h3>A Blog Theme by Start Bootstrap</h3>
            </div>
        </div>
    );
};

export default Header;