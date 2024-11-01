import React, {useState} from "react";

function App() {
    const [headingText, setHeadingText] = useState("Hello");
    const [isMouseOver, setMouseOver] = useState(false);

    function handleClick(){
        setHeadingText("Submitted");
    }

    function handleMouseOver(){
        setMouseOver(!isMouseOver);
    }

    return (
        <div className="container">
        <h1>{headingText}</h1>
        <input type="text" placeholder="What's your name?" />
        <button 
            onClick={handleClick} 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOver} 
            style={isMouseOver ? {backgroundColor: "black"} : {backgroundColor: "white"}}
        >Submit</button>
        </div>
    );
}

export default App;