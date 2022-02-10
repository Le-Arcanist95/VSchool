import React from "react";

function App() {
    const [data, setData] = React.useState({
        name: "",
        inputList: []
    });
    function handleChange(event) {
        const {name, value} = event.target;
        setData(prevData => {
            return {
                ...prevData,
                [name]: value
            };
        });
    };
    function handleSubmit(event) {
        event.preventDefault();
        setData(prevData => {
            let newData = prevData.inputList
            newData.push(data.name)
            return({
                ...prevData,
                inputList: newData
            })
        });
    };
    let savedNames = data.inputList.map(name => <li>{name}</li>)
    return (
        <div>
            <form>
                <input
                    type="text"
                    onChange={handleChange}
                    name="name"
                    value={data.name}
                />
                <button onClick={handleSubmit}>Submit</button>
            </form>
            <h1>{data.name}</h1>
            <ol>
                {savedNames}
            </ol>
        </div>
    );
;}

export default App;