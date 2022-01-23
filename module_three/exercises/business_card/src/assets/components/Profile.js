import React from "react";

function Profile(props) {
    const containerStyle = {
        backgroundColor: "#1A1B21",
        borderRadius: "10px 10px 0px 0px",
        fontFamily: "Inter",
        fontStyle: "normal",
        textAlign: "center",
        margin: "0px"
    }
    const imgStyle = {
        width: "317px",
        height: "317px",
        borderRadius: "10px 10px 0px 0px"
    };
    const nameStyle = {
        fontWeight: "bold",
        fontSize: "25px",
        lineHeight: "30px",
        color: "#FFFFFF",
        margin: "15px 0 0 0"
    };
    const titleStyle = {
        fontWeight: "normal",
        fontSize: "12.8px",
        lineHeight: "15px",
        color: "#F3BF99",
        margin: 0
    }
    const emailStyle = {
        fontWeight: "400px",
        fontSize: "10.24px",
        lineHeight: "15.36px",
        color: "#F5F5F5",
        margin: "5px 0 5px 0"
    };
    const btnStyle = {
        display: "flex",
        width: "247px",
        height: "34px",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "9px 13px 9px 11px",
        background: "#FFFFFF",
        border: "1px solid #D1D5DB",
        boxSizing: "border-box",
        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
        borderRadius: "6px",
        margin: "10px auto",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "500px",
        fontSize: "14px",
        lineHeight: "16px"
    }

    return (
        <div style={containerStyle}>
            <img alt="" src={props.content.profileImg} style={imgStyle}/>
            <h1 style={nameStyle}>{props.content.name}</h1>
            <h3 style={titleStyle}>{props.content.jobTitle}</h3>
            <h4 style={emailStyle}>{props.content.email}</h4>
            <button style={btnStyle}> Email </button>
        </div>
    )
}

export default Profile;