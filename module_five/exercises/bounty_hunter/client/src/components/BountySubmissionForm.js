import React, { useState } from "react";

export default function BountySubmissionForm(props) {
    // Create initial values for form input
    const initInputs = { 
        fName: props.fName || "",
        lName: props.lName || "",
        living: props.living || false,
        reward: props.reward || "",
        faction: props.faction || ""
    };
    
    // Set state with initial object as default
    const [inputs, setInputs] = useState(initInputs);
    
    // Function for updating state as client inputs data
    function handleChange(e) {
        // Destructure event for required info
        const {name, value} = e.target;
        setInputs(prevInputs => {
            return {
                ...prevInputs,
                [name]: value
            };
        });
    };
    // Function for POST or PUT requests and 'isEditing' toggle
    function handleSubmit(e) {
        e.preventDefault();
        // Send POST or PUT request and include inputs if present
        props.submit(inputs, props._id);
        console.log(props);
        // Toggle off 'isEditing'
            if (props.functions !== undefined) {
                if (props.functions.isEditing) {
                    props.functions.setIsEditing(false);
                };
            };
        // Reset state to default values
        setInputs(initInputs);
    };

    return (
        <form>
            <input 
                type="text"
                name="fName"
                value={inputs.fName}
                onChange={handleChange}
                placeholder="First Name"
            />
            <input 
                type="text"
                name="lName"
                value={inputs.lName}
                onChange={handleChange}
                placeholder="Last Name"
            />
            <input 
                type="number"
                name="reward"
                value={inputs.reward}
                onChange={handleChange}
                placeholder="Bounty Price"
            />
            <input 
                type="text"
                name="living"
                value={inputs.living}
                onChange={handleChange}
                placeholder="Alive? (True or False)"
            />
            <input 
                type="text"
                name="faction"
                value={inputs.faction}
                onChange={handleChange}
                placeholder="Faction"
            />
            <button onClick={handleSubmit}> {props.btnText} </button>
        </form>
    )
}