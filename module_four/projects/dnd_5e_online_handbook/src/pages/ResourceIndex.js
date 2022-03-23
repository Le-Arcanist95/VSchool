import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

export default function ResourceIndex() {
    const [index, setIndex] = useState({});
    const [resourceList, setResourceList] = useState([])
    
    //Initial API call to receive Table of Contents
    useEffect(() => {
        Axios.get("https://www.dnd5eapi.co/api/")
            .then(response => response.json())
            .then(data => setIndex(data))
    }, []);

    //Create list items to populate Table of Contents
    const displayList = Object.keys(index).map(item => {
        // Alter name for spacing and capitalization
        const name = (
            item.replaceAll("-", " ")
                .split(" ")
                .map(newKey => newKey.charAt(0).toUpperCase() + newKey.slice(1))
                .join(" ")
        )

        //Create sublist to hold links for each resource from the index
        Axios.get(`https://www.dnd5eapi.co/api/${item}`)
            .then(response => response.json())
            .then(data => setResourceList(data.results));

        const subDisplayList = resourceList.map(resource => {
           return (
               <li key={resource.index}>
                   <Link to={`/resources/${resource.url}`}> {resource.name} </Link>
               </li>
           ) 
        })

        //Return list item with collapsable display for each item on the ToC
        return (
            <li key={item}>
                <details>
                    <summary> {name} </summary>
                    <ul className="resources-list">
                        {subDisplayList}
                    </ul>
                </details>
            </li>
        )
    })

    return (
        <div className="resources-container">
            <h1> Resources Page </h1>
            <ul className="index-list" style={{listStyleType: "none"}}>
                {displayList}
            </ul>
        </div>
    )
}