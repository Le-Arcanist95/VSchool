import React, { useState } from "react";

export default function NewSubmissionForm(props) {
    const initUserInputs = { 
        name: props.name || "", 
        age: props.age || "",
        breed: props.breed || ""
    };
    const initPetInputs = {
        name: props.name || "",
        breed: props.breed || "",
        owner: props.owner || ""
    };
    const [userInputs, setUserInputs] = useState(initUserInputs);
    const [petInputs, setPetInputs] = useState(initPetInputs);
    const [select, setSelect] = useState("user");

    function handleChange(e) {
        const { name, value} = e.target;
        
        if(select === "user") {
            setUserInputs(prevInputs => ({...prevInputs, [name]: value}));
        } else {
            setPetInputs(prevInputs => ({...prevInputs, [name]: value}));    
        }
    };

    function toggleSelect(e) {
        setSelect(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
        if (props.editToggle.isEditing) {
            props.editToggle.setIsEditing(false);
        }

        if (select === "user") {
            props.submit(userInputs, props._id, select);
            setUserInputs(initUserInputs);
        } else {
            props.submit(petInputs, props._id, select);
            setPetInputs(initPetInputs);
        }
    };

    let form;
    if(select === "user") {
        form = 
            <form>
                <input 
                    type="text"
                    name="name"
                    value={userInputs.name}
                    onChange={handleChange}
                    placeholder="Name"
                />
                <input 
                    type="text"
                    name="age"
                    value={userInputs.age}
                    onChange={handleChange}
                    placeholder="Age"
                />
                <button onClick={handleSubmit}> {props.btnText} </button>
            </form>
    } else if (select === "pet") {
        form = 
            <form>
                <input
                    type="text"
                    name="name"
                    value={petInputs.name}
                    onChange={handleChange}
                    placeholder="Name"
                />
                <input
                    type="text"
                    name="breed"
                    value={petInputs.breed}
                    onChange={handleChange}
                    placeholder="Breed"
                />
                <input 
                    type="text"
                    name="owner"
                    value={petInputs.owner}
                    onChange={handleChange}
                    placeholder="Owner"
                />
                <button onClick={handleSubmit}> {props.btnText} </button>
            </form>
    }

    return (
        <div style={{display: "flex"}}>
            <select onChange={toggleSelect} style={{width: "10%", textAlign: "center", fontSize: 16}}>
                <option value="user"> User </option>
                <option value="pet"> Pet </option>
            </select>
            {form}
        </div>
    )
}