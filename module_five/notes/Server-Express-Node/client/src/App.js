import React, { useState, useEffect } from "react";
import Axios from "axios";
import User from "./components/User.js";
import Pet from "./components/Pet.js";

function App() {
    const [users, setUsers] = useState([]);
    const [pets, setPets] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const endpoints = [
                '/users',
                '/pets'
            ]
            Axios.all(endpoints.map((endpoint) => Axios.get(endpoint)))
                .then(
                    Axios.spread(({data: userData}, {data: petData}) => {
                        setUsers(userData);
                        setPets(petData);
                    })
                )
                .catch(err => console.log(err));
        };
        fetchData();
    },[])

    return (
        <div>
            { users.map(user => <User {...user} key={user._id}/>) }
            { pets.map(pet => <Pet {...pet} key={pet._id}/>) }
        </div>
    )
}

export default App;