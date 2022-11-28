import React, { useState } from "react";

export default function BountySubmissionForm(props) {
    // Create initial values for form input
    const initInputs = { 
        fName: props.fName || "",
        lName: props.lName || "",
        status: props.living || "",
        reward: props.reward || null,
        faction: props.type || ""
    };
    const [inputs, setInputs] = useState(initInputs);

    function handleChange(e) {
        const { name, value} = e.target;
        setInputs(prevInputs => ({...prevInputs, [name]: value}));
    };

    function handleSubmit(e) {
        e.preventDefault();
        props.submit(inputs, props._id);
        if (props.editToggle.isEditing) {
            props.editToggle.setIsEditing(false);
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
            <input 
                type="checkbox"
                name="status"
                checked={inputs.status}
                value={inputs.status}
                onChange={handleChange}
                placeholder="Living?"
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
                name="faction"
                value={inputs.faction}
                onChange={handleChange}
                placeholder="Faction"
            />
            <button onClick={handleSubmit}> {props.btnText} </button>
        </form>
    )
}