import React from "react";
import Badge from "./Badge";

function App() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        placeOfBirth: "",
        phoneNum: "",
        favFood: "",
        textAreaContent: "",
        id: 0
    });
    const [badgeData, setBadgeData] = React.useState([
            {
                firstName: "Testy",
                lastName: "Badge",
                email: "Critical@Fail.com",
                placeOfBirth: "Code, Error",
                phoneNum: "302-289-5741",
                favFood: "Bugs",
                textAreaContent: "I don't know how I got here.",
                id: 0
            }
        ]);

    function handleChange(event) {
        const {name, value, type, checked} = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            };
        });
    };
    function handleSubmit(event) {
        event.preventDefault();

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                id: prevFormData.id++
            };
        });
        setBadgeData(prevBadgeData => {
            let newData = prevBadgeData;
            newData.push(formData);
            return (newData)
        });
    };

    const {firstName, lastName, email, placeOfBirth, phoneNum, favFood, textAreaContent} = formData
    const enabled =
        firstName.length > 0 &&
        lastName.length > 0 &&
        email.length > 0 &&
        placeOfBirth.length > 0 &&
        phoneNum.length > 0 &&
        favFood.length > 0 &&
        textAreaContent.length > 0;

    let badgeList = badgeData.map(badge => <Badge key={badge.id} info={badge}/>);


    return (
        <div>
            <form className="form--container" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstName}
                    minLength={3}
                />
                <input 
                    type="text"
                    placeholder="Last Name"
                    onChange={handleChange}
                    name="lastName"
                    value={formData.lastName}
                    minLength={3}
                />
                <input 
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                    minLength={3}
                />
                <input 
                    type="text"
                    placeholder="Place of Birth"
                    onChange={handleChange}
                    name="placeOfBirth"
                    value={formData.placeOfBirth}
                    minLength={3}
                />
                <input 
                    type="tel"
                    placeholder="123-456-7890"
                    // pattern=""
                    onChange={handleChange}
                    name="phoneNum"
                    value={formData.phoneNum}
                />
                <input 
                    type="text"
                    placeholder="Favorite Food"
                    onChange={handleChange}
                    name="favFood"
                    value={formData.favFood}
                    minLength={3}
                />
                <textarea
                    placeholder="Tell us about yourself"
                    onChange={handleChange}
                    name="textAreaContent"
                    value={formData.textAreaContent}
                    minLength={3}
                />
                <button disabled={!enabled}>Submit</button>
            </form>
            {badgeList}
        </div>
    );
};

export default App;