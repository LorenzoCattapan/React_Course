import React, { useState } from "react";

function CreateArea(props) {
    const [newNote, setNewNote] = useState({
        title: "",
        content: "",
    });

    function handleChange(event){
        const {name, value} = event.target;
        setNewNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value,
            }
        });
    }

    function submitNote(event) {
        props.onAdd(newNote);
        setNewNote({ title: "", content: "" });
        event.preventDefault();
    }

    return (
        <div>
        <form>
            <input 
                name="title" 
                value={newNote.title} 
                placeholder="Title" 
                onChange={handleChange} 
            />
            <textarea 
                name="content" 
                value={newNote.content} 
                placeholder="Take a note..." 
                onChange={handleChange} 
                rows="3"
            />
            <button onClick={submitNote}>Add</button>
        </form>
        </div>
    );
}

export default CreateArea;
