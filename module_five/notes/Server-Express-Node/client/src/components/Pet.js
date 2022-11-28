import React from "react";

export default function Pet(props) {
    const { name, breed } = props;

    return (
        <div className="pet-container">
            <h3>Name: { name }</h3>
            <h4>Breed: { breed }</h4>
        </div>
    );
};