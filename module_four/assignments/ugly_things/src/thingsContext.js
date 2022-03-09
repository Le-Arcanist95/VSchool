import React, { useState, useEffect, createContext } from "react";

const ThingsContext = createContext()

function ThingsContextProvider(props) {
    const [uglyThingsArr, setUglyThingsArr] = useState([]);

    useEffect(() => {
        const getThings = async () => {
          const res = await fetch("https://api.vschool.io/levi-arcane/thing");
          const jsonData = await res.json();
          console.log(jsonData);
          setUglyThingsArr(jsonData);
        };
    
        getThings();
      }, [uglyThingsArr]);
    
    function handleSubmit(e) {

    }
    function handleEdit(e) {

    }
    function handleDelete(e) {

    }

    return (
        <ThingsContext.Provider value={{ uglyThingsArr, handleSubmit, handleEdit, handleDelete }}>
            {props.children}
        </ThingsContext.Provider>
    )
}

export { ThingsContextProvider, ThingsContext }