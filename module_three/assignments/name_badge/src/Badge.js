import React from "react";

function Badge(props) {
    return (
        <div>
            <h1 className="badge--bar">Badge: </h1>
            <div className="info--container">
                <div className="p--grid">
                    <p><b>Name:</b> {props.info.firstName} {props.info.lastName}</p>
                    <p><b>Phone:</b> {props.info.phoneNum}</p>
                    <p><b>Place of Birth:</b> {props.info.placeOfBirth}</p>
                    <p><b>Favorite Food:</b> {props.info.favFood}</p>
                    <p><b>Email:</b> {props.info.email}</p>
                </div>
                <p>
                    {props.info.textAreaContent}
                </p>
            </div>
        </div>
    );
};

export default Badge;