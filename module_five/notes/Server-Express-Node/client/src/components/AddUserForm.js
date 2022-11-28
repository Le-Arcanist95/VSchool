import React, { useState } from "react";

export default function AddUserForm(props) {
    const initInputs = { 
        name: props.name || "", 
        age: props.age || null
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
                name="name"
                value={inputs.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input 
                type="text"
                name="age"
                value={inputs.age}
                onChange={handleChange}
                placeholder="Age"
            />
            <button onClick={handleSubmit}> {props.btnText} </button>
        </form>
    )
}