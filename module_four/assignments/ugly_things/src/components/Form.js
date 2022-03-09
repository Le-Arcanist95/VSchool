import React, { useState, useContext } from "react";
import PropTypes from "prop-types"

import { ThingsContext } from "../thingsContext";

function Form() {
    const { handleSubmit } = useContext(ThingsContext)

    const [inputValues, setInputValues] = useState({
        title: PropTypes.string,
        description: PropTypes.string,
        imgUrl: PropTypes.string
    })

    function handleChange(e) {
        const { name, value } = e.target;

        setInputValues(prevValues => ({
            ...prevValues,
            [name]: value
        }))
    }

    return (
        <Form>
            <input type={"text"} name={"title"} value={inputValues.title} onChange={handleChange}/>
            <input type={"text"} name={"description"} value={inputValues.description} onChange={handleChange}/>
            <input type={"text"} name={"imgUrl"} value={inputValues.imgUrl} onChange={handleChange}/>
            <input type={"submit"} value={"Submit"} onClick={handleSubmit}/>
        </Form>
    )
}

export default Form;