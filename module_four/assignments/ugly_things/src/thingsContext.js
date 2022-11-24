import React, { useState, useEffect, createContext } from "react";

const ThingsContext = createContext()

function ThingsContextProvider(props) {
    const [uglyThingsArr, setUglyThingsArr] = useState([]);
    ;
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        imgUrl: "https://picsum.photos/id/237/536/354"
    })
    // Retrieve information from the API and set state based on response
    useEffect(() => {
        fetch("https://api.vschool.io/levi-arcane/thing")
            .then(res => res.json())
            .then(response => setUglyThingsArr(response))
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
    function handleEdit(id, data) {
        fetch(`https://api.vschool.io/levi-arcane/thing/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(response => setUglyThingsArr(prevArr => prevArr.map(uglyThing => uglyThing._id !== id ? uglyThing : response)))
    }
    function handleDelete(id) {
        fetch(`https://api.vschool.io/levi-arcane/thing/${id}`, {method: "DELETE"})
            .then(res => res.json())
            .then(response => setUglyThingsArr(prevArr => prevArr.filter(uglyThing => uglyThing._id !== id)))
    }

    return (
        <ThingsContext.Provider value={{ uglyThingsArr, formData, handleChange, handleSubmit, handleEdit, handleDelete }}>
            {props.children}
        </ThingsContext.Provider>
    )
}

export { ThingsContextProvider, ThingsContext }