import React from "react";

function Pet(props) {
    return (
        <div>
            <h5>Name: {props.info.name}</h5>
            <h5>Breed: {props.info.breed}</h5>
        </div>
    )
}

export default Pet;