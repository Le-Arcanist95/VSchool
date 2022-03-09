import React, { useState, useContext } from "react";

import { ThingsContext } from "../thingsContext";

function Form() {
    const { handleSubmit } = useContext(ThingsContext)

    const [inputValues, setInputValues] = useState({
        title: "",
        description: "",
        imgUrl: ""
    })

    function handleChange(e) {
        const { name, value } = e.target;

        setInputValues(prevValues => ({
            ...prevValues,
            [name]: value
        }))
    }

    return (
        <form>
            <input type={"text"} name={"title"} value={inputValues.title} onChange={handleChange}/>
            <input type={"text"} name={"description"} value={inputValues.description} onChange={handleChange}/>
            <input type={"text"} name={"imgUrl"} value={inputValues.imgUrl} onChange={handleChange}/>
            <input type={"submit"} value={"Submit"} onClick={handleSubmit}/>
        </form>
    )
}

export default Form;