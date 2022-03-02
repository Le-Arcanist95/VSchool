import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Mark from "./components/Mark";

export default function App() {
    const [hitList, setHitList] = useState([]);

    useEffect(() => {
        const acquireTargets = async () => {
            const res = await fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json");
            const jsonData = await res.json();
            setHitList(jsonData);
        };

        acquireTargets();
    }, []);
    
    const targets = hitList.map(x => <Mark key={x.name} info={x}/>);

    return (
        <div>
            <Header />
            {targets}
        </div>
    );
};