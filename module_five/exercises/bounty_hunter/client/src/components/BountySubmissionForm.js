import React, { useState } from "react";

export default function BountySubmissionForm(props) {
    // Create initial values for form input
    const initInputs = { 
        fName: props.fName || "",
        lName: props.lName || "",
        living: props.living || false,
        reward: props.reward || "",
        faction: props.type || ""
    };
    const [inputs, setInputs] = useState(initInputs);

    function handleChange(e) {
        const {name, value, type, checked} = e.target;
        setInputs(prevInputs => {
            return {
                ...prevInputs,
                [name]: type === "checkbox" ? checked : value
            };
        });
    };

    function handleSubmit(e) {
        e.preventDefault();
        props.submit(inputs, props._id);
        if (props.functions.isEditing) {
            props.functions.setIsEditing(false);
        }
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
            <label> Living: 
                <input 
                    type="checkbox"
                    name="status"
                    checked={inputs.living}
                    onChange={handleChange}
                    placeholder="Living?"
                />
            </label>
            <input 
                type="number"
                name="reward"
                value={inputs.reward}
                onChange={handleChange}
                placeholder="Bounty Price"
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