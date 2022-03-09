import React, { useContext } from "react";

import { ThingsContext } from "../thingsContext";

function UglyThing(props) {
    const { handleEdit, handleDelete } = useContext(ThingsContext);
    const { title, description, imgUrl } = props.attributes;
    return (
        <div>

        </div>
    )
}

export default UglyThing;