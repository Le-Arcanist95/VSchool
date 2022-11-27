import React from "react";

export default function Pet(props) {
    const { name, breed, owner } = props;
    return (
        <div style={{
                border: "1px solid black", 
                width: "50%", 
                margin: "2em",
                textAlign: "center"
            }
        }>
            <h1>Name: { name }</h1>
            <h2>Breed: { breed }</h2>
            <h3>Owner: { owner }</h3>
        </div>
    );
};