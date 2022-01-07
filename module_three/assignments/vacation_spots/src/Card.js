import React from "react";

function Card(props) {
    let styles = {
        display: "inline-block",
        margin: 2.5,
        padding: 15,
        backgroundColor: ""
    };
    let priceElement;

    switch(props.location.timeToGo) {
        case "Spring":
            styles.backgroundColor = "#99FF33"
            break;
        case "Summer":
            styles.backgroundColor = "#FFFF33"
            break;
        case "Fall":
            styles.backgroundColor = "#FF9933"
            break;
        case "Winter":
            styles.backgroundColor = "#33FFFF"
            break;
        default:
            styles.backgroundColor = "#FFFFFF"
            break;
    };
    if (props.location.price >= 1000) {
        priceElement = "$$$";
    } else if (props.location.price >= 500) {
        priceElement = "$$";
    } else {
        priceElement = "$";
    };

    return (
        <div style = {styles}>
            <div className = "card-background">
                {priceElement}
            </div>
            <h3>Location: {props.location.place}</h3>
            <h4>Price: {props.location.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</h4>
            <h5>Best Time to Visit: <br/> {props.location.timeToGo}</h5>
        </div>
    );
};

export default Card;