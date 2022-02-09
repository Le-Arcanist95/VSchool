import React from "react";
import BadgeList from "./BadgeList";

function Form(){
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        placeOfBirth: "",
        phoneNum: "",
        favFood: "",
        textAreaContent: ""
    });

    function handleChange(event) {
        console.log(event);
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
        console.log(formData);
    };

    return (
        <form className="form--container" onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input 
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input 
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <input 
                type="text"
                placeholder="Place of Birth"
                onChange={handleChange}
                name="placeOfBirth"
                value={formData.placeOfBirth}
            />
            <input 
                type="tel"
                placeholder="123-456-7890"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
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
            />
            <textarea
                placeholder="Tell us about yourself"
                onChange={handleChange}
                name="textAreaContent"
                value={formData.textAreaContent}
            />
            <button>
                Submit
            </button>
        </form>
    );
};

export default Form;