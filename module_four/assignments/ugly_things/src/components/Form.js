import React, { useContext } from "react";

import { ThingsContext } from "../thingsContext";

function Form() {
    const { formData, handleChange, handleSubmit } = useContext(ThingsContext)

    return (
        <form>
            <input type={"text"} name={"title"} value={formData.title} onChange={handleChange}/>
            <input type={"text"} name={"description"} value={formData.description} onChange={handleChange}/>
            <input type={"text"} name={"imgUrl"} value={formData.imgUrl} onChange={handleChange}/>
            <input type={"submit"} value={"Submit"} onClick={handleSubmit}/>
        </form>
    )
}

export default Form;