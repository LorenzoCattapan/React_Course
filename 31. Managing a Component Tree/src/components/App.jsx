import React, { useState } from "react";
import ToDoItem from "./ToDoItem.jsx";

function App() {
    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);

    function handleChange(event){
        const newValue = event.target.value;
        setInputText(newValue);
    }

    function addItem(){
        setItems((prevItems) => {
            return [
                ...prevItems,
                inputText
            ]
        });
        setInputText("");
    }

    //FUNCTION PASSED TO TODOITEM COMPONENTS TO ADD THE DELETE ON CLICK FUNCTIONALITY
    function deleteItem(id){
        setItems((prevValue) => {
            return prevValue.filter((item, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div className="container">
        <div className="heading">
            <h1>To-Do List</h1>
        </div>
        <div className="form">
            <input type="text" value={inputText} onChange={handleChange}/>
            <button onClick={addItem}>
                <span>Add</span>
            </button>
        </div>
        <div>
            <ul>
                {items.map((item, index) => {
                    return <ToDoItem text={item} id={index} key={index} onChecked={deleteItem}/>
                })}
            </ul>
        </div>
        </div>
    );
}

export default App;
