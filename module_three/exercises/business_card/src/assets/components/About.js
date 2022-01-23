import React from "react";

function About(props) {
    const containerStyle = {
        backgroundColor: "#1A1B21",
        fontFamily: "Inter",
        fontStyle: "normal",
        textAlign: "center",
        margin: "0px"
    }
    const titleStyle = {

    }
    const contentStyle = {

    }

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>About</h1>
            <p style={contentStyle}>{props.content}</p>
        </div>
    )
}

export default About;