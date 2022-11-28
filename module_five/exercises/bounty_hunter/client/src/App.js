import React, { useEffect, useState } from "react";
import Axios from "axios";
import Bounty from "./components/Bounty.js";
import BountySubmissionForm from "./components/BountySubmissionForm.js";

export default function App() {
    const [bountyList, setBountyList] = useState([]);
    
    // CRUD Functions
    function getBounties() {
        Axios.get('/bounty')
            // Set state with result
            .then(res => setBountyList(res.data))
            .catch(err => console.log(err));
    };
    function createBounty(newBounty) {
        Axios.post('/bounty', newBounty)
            // Update state with new bounty
            .then(res => setBountyList(prevList => [...prevList, res.data]))
            .catch(err => console.log(err));
    };
    function deleteBounty(bountyId) {
        Axios.delete(`/bounty/${bountyId}`)
            // Update state to force refresh
            .then(res => setBountyList(prevList => prevList.filter(bounty => bounty._id !== bountyId)))
            .catch(err => console.log(err));
    };
    function editBounty(updates, bountyId) {
        Axios.put(`/bounty/${bountyId}`)
            // Update state to reflect changes and force refresh
            .then(res => bountyList.map(bounty => bounty._id !== bountyId ? bounty : res.data))
            .catch(err => console.log(err));
    };

    // API Collection
    useEffect(() => {
        getBounties();
    }, []);

    return (
        <div>
            {/* Form for handling new and updated bounties */}
            <BountySubmissionForm submit={createBounty}/>
            {/* Component creation for each bounty */}
            {bountyList.map(bounty => 
                <Bounty
                {...bounty} 
                key={bounty._id}
                deleteBounty={deleteBounty}
                editBounty={editBounty}
                />)
            }
        </div>
    );
};