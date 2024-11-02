import React, { useState } from "react";

function App() {
    const [fullName, setFullName] = useState({
        fName: "",
        lName: "",
    });

    function updateFullName(event){
        const {value, name} = event.target
        //NEVER ACCESS EVENT INSIDE A SETSTATE FUNCTION (SYNTHETIC EVENT WARNING ERROR)
        setFullName( (prevValue) => {
            if(name === "fName"){
                return {
                    fName: value,
                    lName: prevValue.lName,
                }
            } else if(name === "lName"){
                return {
                    fName: prevValue.fName,
                    lName: value,
                }
            }
        });

    }

    return (
    <div className="container">
        <h1>Hello {fullName.fName} {fullName.lName}</h1>
        <form>
            <input name="fName" placeholder="First Name" value={fullName.fName} onChange={updateFullName} />
            <input name="lName" placeholder="Last Name" value={fullName.lName} onChange={updateFullName}/>
            <button>Submit</button>
        </form>
    </div>
    );
}

export default App;