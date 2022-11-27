import React from "react";

export default function User(props) {
    const { name, age } = props;
    return (
        <div style={{
                border: "1px solid black", 
                width: "50%", 
                margin: "2em",
                textAlign: "center"
            }
        }>
            <h1>Name: { name }</h1>
            <h2>Age: { age }</h2>
        </div>
    );
};