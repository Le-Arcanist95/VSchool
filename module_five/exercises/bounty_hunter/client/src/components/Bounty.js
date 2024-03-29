import React, { useState } from "react";
import BountySubmissionForm from "./BountySubmissionForm.js";

export default function Bounty(props) {
    const [isEditing, setIsEditing] = useState(false);
    const { fName, lName, living, reward, faction, _id, editBounty, deleteBounty } = props;

    console.log(living)
    return (
        <div>
            { !isEditing ?
            <>
                <h1> Name: {fName} {lName} </h1>
                <h3> Status: {living ? "Alive" : "Dead"} </h3>
                <h3> Reward: {reward} </h3>
                <h4> Faction: {faction} </h4>
                <button className="delete-btn" onClick={() => (deleteBounty(_id))}> Delete </button>
                <button className="edit-btn" onClick={() => setIsEditing(prevValue => !prevValue)}> Edit </button>
            </>
            :
            <>
                <h1> Name: {fName} {lName} </h1>
                <h3> Status: {living ? "Alive" : "Dead"} </h3>
                <h3> Reward: {reward} </h3>
                <h4> Faction: {faction} </h4>
                <hr/>
                <BountySubmissionForm 
                    fName={fName}
                    lName={lName}
                    living={living}
                    reward={reward}
                    faction={faction}
                    _id={_id}
                    functions={{isEditing, setIsEditing}}
                    btnText="Save"
                    submit={editBounty}
                />
            </>
            }
        </div>
    )
}