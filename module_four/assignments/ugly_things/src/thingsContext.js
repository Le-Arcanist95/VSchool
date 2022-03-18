import React, { useState, useEffect, createContext } from "react";

const ThingsContext = createContext()

function ThingsContextProvider(props) {
    const [uglyThingsArr, setUglyThingsArr] = useState([]);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        imgUrl: ""
    })

    useEffect(() => {
        fetch("https://api.vschool.io/levi-arcane/thing")
            .then(res => res.json())
            .then(data => setUglyThingsArr(data))
    }, [])

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData(prevValues => ({
            ...prevValues,
            [name]: value
        }))
    }
    function handleSubmit(e) {
        e.preventDefault();

        fetch("https://api.vschool.io/levi-arcane/thing", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
            .then(res => res.json())
            .then(data => setUglyThingsArr(prevArr => {
                return [
                    ...prevArr,
                    data
                ]
            }))
    }
    function handleEdit(id) {
        console.log(id)
    }
    function handleDelete(id) {
        console.log(id)
    }

    return (
        <ThingsContext.Provider value={{ uglyThingsArr, formData, handleChange, handleSubmit, handleEdit, handleDelete }}>
            {props.children}
        </ThingsContext.Provider>
    )
}

export { ThingsContextProvider, ThingsContext }