import React, { useState, useContext } from "react";

import { ThingsContext } from "../thingsContext";

function UglyThing(props) {
    const [editData, setEditData] = useState({
        title: "",
        description: "",
        imgUrl: ""
    })
    const [isEditing, setIsEditing] = useState(false);
    const { handleEdit, handleDelete } = useContext(ThingsContext);
    const { _id, title, description, imgUrl } = props.attributes;

    function editChange(e) {
        const { name, value } = e.target;

        setEditData(prevValues => ({
            ...prevValues,
            [name]: value
        }))
    }

    return (
        <div>
            {isEditing ? 
                <div>
                    <input name="title" value={editData.title} onChange={editChange}/>
                    <input name="description" value={editData.description} onChange={editChange}/>
                    <input name="imgUrl" value={editData.imgUrl} onChange={editChange}/>
                    <button onClick={() => {
                        setIsEditing(false);
                        handleEdit(_id, editData);
                    }}> Save </button>
                </div>
            :
                <div>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <img alt="" src={imgUrl} />
                    <button onClick={() => {
                        setIsEditing(true);
                        setEditData({
                            title: title,
                            description: description,
                            imgUrl: imgUrl
                        })
                    }}> Edit </button>
                    <button onClick={() => handleDelete(_id)}> Delete </button>
                </div>

            }
        </div>
    )
}

export default UglyThing;