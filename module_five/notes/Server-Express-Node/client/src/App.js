import React, { useState, useEffect } from "react";
import Axios from "axios";
import User from "./components/User.js";
import AddUserForm from "./components/AddUserForm.js";

function App() {
    const [users, setUsers] = useState([]);

    function getUsers() {
        Axios.get("/users")
            .then(res => setUsers(res.data))
            .catch(err => console.log(err.response.data.errMsg));
    };

    function addUser(newUser) {
        Axios.post("/users", newUser)
            .then(res => {
                setUsers(prevUsers => [...prevUsers, res.data]);
            })
            .catch(err => console.log(err.response.data.errMsg));
    };
    function deleteUser(userId) {
        Axios.delete(`/users/${userId}`)
            .then(res => {
                setUsers(prevUsers => prevUsers.filter(user => user._id !== userId));
            })
            .catch(err => console.log(err.response.data.errMsg));
    };
    function editUser(updates, userId) {
        Axios.put(`/users/${userId}`, updates)
            .then(res => {
                console.log(res)
                setUsers(prevUsers => prevUsers.map(user => user._id !== userId ? user : res.data))
            })
            .catch(err => console.log(err.response.data.errMsg));
    }

    useEffect(() => {
        getUsers();
    },[]);

    return (
        <div>
            <AddUserForm submit={addUser} />
            { users.map(user => 
                <User 
                    {...user} 
                    key={user._id}
                    deleteUser={deleteUser}
                    editUser={editUser}
                />)
            }
        </div>
    )
}

export default App;