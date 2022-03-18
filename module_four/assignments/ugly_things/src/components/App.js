import React, { useContext } from "react";
import { ThingsContext } from "../thingsContext";

import Form from "./Form";
import UglyThing from "./UglyThing";


function App() {
    const { uglyThingsArr } = useContext(ThingsContext);
    const uglyThingList = uglyThingsArr.map(thing => <UglyThing key={thing._id} attributes={thing}/>)

    return (
        <>
            <Form />
            {uglyThingList}
        </>
    )
}

export default App;