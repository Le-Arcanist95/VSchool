import React from "react";
import Pet from "./Pet";

function Friend(props) {
    const pets = props.info.pets.map(pet => <Pet key={pet.name} info={pet}/>);
    const friendStyling = {
        display: "block",
        backgroundColor: "burlywood",
        border: "2.5px solid black",
        margin: 5,
        height: 500,
        width: 500
    };
    const petStyling = {
        display: "block",
        backgroundColor: "chocolate",
        border: "1px solid black"
    };

    return (
        <div style={friendStyling}>
            <h3>Name: {props.info.name}</h3>
            <h4>Age: {props.info.age}</h4>
            <hr />
            <div style={petStyling}>
                <h4>Pets</h4>
                <div>
                    {pets}
                </div>
            </div>
        </div>
    );
};

export default Friend;