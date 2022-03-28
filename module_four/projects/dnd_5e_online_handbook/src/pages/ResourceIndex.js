import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Change recieved string into title format (i.e. The Worst Error To Fix)
function formatTitle(str) {
    return (
        str.replaceAll("-", " ")
        .split(" ")
        .map(newKey => newKey.charAt(0).toUpperCase() + newKey.slice(1))
        .join(" ")
    ) 
}
//Custom Hook for API calls
function useFetch(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!url) return;
        const fetchData = async () => {
            const response = await fetch(url);
            const data = await response.json()
            setData(data)
        }
        fetchData();
    }, [url]);

    return data;
}
// function useDataMapping(arr) {
//     arr.map(x => {
//         useFetch()
//     })
// }

export default function ResourceIndex() {
    const index = useFetch("https://www.dnd5eapi.co/api");
    
    //Create list items to populate Table of Contents
        // 1. Convert recieved object into an array and map over it.
        // 2. Change naming convention for list item display.
        // 3. Make fetch call within each recieved item to enumerate the api tree.
        // 4. Map over received data from each fetch to create sublist items.
    const displayList = Object.keys(index).map(item => {
        const { data } = useFetch(`https://www.dnd5eapi.co/api/${item}`);
        const summaryName = formatTitle(item);
        const subDisplayList = data.map(resource => {
           return (
               <li key={resource.index}>
                   <Link to={`/resources/${resource.url}`}> {resource.name} </Link>
               </li>
           ) 
        });

        return (
            <li key={item}>
                <details>
                    <summary> {summaryName} </summary>
                    <ul className="resources-list">
                        {subDisplayList}
                    </ul>
                </details>
            </li>
        );
    });

    return (
        <div className="resources-container">
            <h1> Resources Page </h1>
            <ul className="index-list" style={{listStyleType: "none"}}>
                {displayList}
            </ul>
        </div>
    );
};