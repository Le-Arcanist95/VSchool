import React, { useState, useEffect } from "react"
import Axios from "axios"
import Bounty from "./components/Bounty.js"

export default function App(){
    const [bounties, setBounties] = useState([])
    
    function getBounties(){
        // 3. Make an axios request on the front end to get the list of bounties - frontend
        Axios.get("/bounties")
            .then(res => setBounties(prevList => [...prevList, ...res.data]))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        getBounties()
    }, [])
    
    return(
        <div>
            <div className="bounty-container">
                { 
                    bounties.map( bounty => 
                        <Bounty 
                            {...bounty} 
                            key={bounty._id}
                        />) 
                }
            </div>
        </div>
    )
}
