import React from "react";

function Die(props) {
    let dieStyling = {
        margin: 3,
        padding: 4,  
        backgroundColor: "#FAF9F6",  
        width: 100,
        height: 100,
        border: "1px solid black",
        borderRadius: "10%"
    };
    let dotStyling = {
        display: "block",
        width: 25,
        height: 25,
        borderRadius: "50%",
        backgroundColor: "#660000"
    };
    let secondaryStyling
    let tertiaryStyling
    let quaternaryStyling

    switch(props.value) {
        case 1:
            secondaryStyling = {
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            };
            Object.assign(dieStyling, secondaryStyling);
            return (
                <div style={dieStyling}>
                    <span style={dotStyling}></span>
                </div>
            );
        case 2:
            secondaryStyling = {
                display: "flex",
                justifyContent: "space-between"
            };
            tertiaryStyling = {
                alignSelf: "flex-end"
            };
            Object.assign(dieStyling, secondaryStyling);
            Object.assign(tertiaryStyling, dotStyling);
            return (
                <div style={dieStyling}>
                    <span style={dotStyling}></span>
                    <span style={tertiaryStyling}></span>
                </div>
            );
        case 3:
            secondaryStyling = {
                display: "flex",
                justifyContent: "space-between"
            };
            tertiaryStyling = {
                alignSelf: "center"
            };
            quaternaryStyling = {
                alignSelf: "flex-end"
            };
            Object.assign(dieStyling, secondaryStyling);
            Object.assign(tertiaryStyling, dotStyling);
            Object.assign(quaternaryStyling, dotStyling);
            return (
                <div style={dieStyling}>
                    <span style={dotStyling}></span>
                    <span style={tertiaryStyling}></span>
                    <span style={quaternaryStyling}></span>
                </div>
            );
        case 4:
            secondaryStyling = {
                display: "flex",
                justifyContent: "space-between"
            };
            tertiaryStyling = {
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column"
            };
            Object.assign(dieStyling, secondaryStyling);
            return (
                <div style={dieStyling}>
                    <div style={tertiaryStyling}>
                        <span style={dotStyling}></span>
                        <span style={dotStyling}></span>
                    </div>
                    <div style={tertiaryStyling}>
                        <span style={dotStyling}></span>
                        <span style={dotStyling}></span>
                    </div>
                </div>
            );
        case 5:
            secondaryStyling = {
                display: "flex",
                justifyContent: "space-between"
            };
            tertiaryStyling = {
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column"
            };
            quaternaryStyling = {
                margin: "auto auto"
            };
            Object.assign(dieStyling, secondaryStyling);
            return (
                <div style={dieStyling}>
                    <div style={tertiaryStyling}>
                        <span style={dotStyling}></span>
                        <span style={dotStyling}></span>
                    </div>
                    <div style={quaternaryStyling}>
                        <span style={dotStyling}></span>
                    </div>
                    <div style={tertiaryStyling}>
                        <span style={dotStyling}></span>
                        <span style={dotStyling}></span>
                    </div>
                </div>
            );
        case 6:
            secondaryStyling = {
                display: "flex",
                justifyContent: "space-between"
            };
            tertiaryStyling = {
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column"
            };
            Object.assign(dieStyling, secondaryStyling);
            return (
                <div style={dieStyling}>
                    <div style={tertiaryStyling}>
                        <span style={dotStyling}></span>
                        <span style={dotStyling}></span>
                        <span style={dotStyling}></span>
                    </div>
                    <div style={tertiaryStyling}>
                        <span style={dotStyling}></span>
                        <span style={dotStyling}></span>
                        <span style={dotStyling}></span>
                    </div>
                </div>
            );
        default:
            return (
                <div style={dieStyling}>

                </div>
            );
    };
};

export default Die;