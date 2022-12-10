import React, { useEffect, useState } from "react";
import Axios from "axios";
import Pet from "./Pet.js";
import AddUserForm from "./NewSubmissionForm.js";

export default function User(props) {
    const [petData, setPetData] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const { name, age, deleteUser, editUser, _id } = props;

    useEffect(() => {
        Axios.get('/pets')
            .then(res => setPetData(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <div className="user-container">
            {
                !isEditing ?
                    <>
                        <h1>Name: { name }</h1>
                        <h2>Age: { age }</h2>
                    
                        {petData.map(pet => {
                            if(pet.owner === name) {
                                return <Pet {...pet} key={pet._id}/>
                            } else {
                                return <></>
                            }
                        })}
                    
                        <button className="delete-btn" onClick={() => (deleteUser(_id))}> Delete </button>
                        <button className="edit-btn" onClick={() => setIsEditing(prevValue => !prevValue)}> Edit </button>
                    </>
                :
                    <>
                        <h1>Name: { name }</h1>
                        <h2>Age: { age }</h2>
                    
                        {petData.map(pet => {
                            if(pet.owner === name) {
                                return <Pet {...pet} key={pet._id}/>
                            } else {
                                return <></>
                            }
                        })}
                        <AddUserForm 
                            name={name}
                            age={age}
                            btnText="Submit Edit"
                            _id={_id}
                            submit={editUser}
                            editToggle={{isEditing, setIsEditing}}
                        />
                    </>
            }
        </div>
    );
};