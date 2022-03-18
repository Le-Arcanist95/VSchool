import React, { useContext } from "react";

import { ThingsContext } from "../thingsContext";

function Form() {
    const { formData, handleChange, handleSubmit } = useContext(ThingsContext)

    return (
        <form className="inputForm">
            <input placeholder="Title" type={"text"} name={"title"} value={formData.title} onChange={handleChange}/>
            <input placeholder="Description" type={"text"} name={"description"} value={formData.description} onChange={handleChange}/>
            <input placeholder="Image URL" type={"text"} name={"imgUrl"} value={formData.imgUrl} onChange={handleChange}/>
            <input className="inputSubmit" type={"submit"} value={"Submit"} onClick={handleSubmit}/>
        </form>
    )
}

export default Form;