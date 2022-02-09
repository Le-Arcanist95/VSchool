import React from "react";

function Badge(props) {
    return (
        <div>
            <h1 className="badge--bar">Badge: </h1>
            <div className="info--container">
                <div className="p--grid">
                    <p>Name: {props.info.firstName} {props.info.lastName}</p>
                    <p>Phone: {props.info.phoneNum}</p>
                    <p>Place of Birth: {props.info.placeOfBirth}</p>
                    <p>Favorite Food: {props.info.favFood}</p>
                    <p>Email: {props.info.email}</p>
                </div>
                
            </div>
        </div>
    )
}

export default Badge;