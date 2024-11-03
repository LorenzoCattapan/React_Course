import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [newNote, setNewNote] = useState({
        title: "",
        content: "",
    });
    const [isExpanded, setExpanded] = useState(false);

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
        <form className="create-note">
            {isExpanded && <input 
                name="title" 
                value={newNote.title} 
                placeholder="Title" 
                onChange={handleChange} 
            />}
            <textarea 
                name="content" 
                value={newNote.content} 
                placeholder="Take a note..." 
                onChange={handleChange}
                onClick={() => {setExpanded(true)}}
                rows={isExpanded ? "3" : "1"}
            />
            <Zoom in={isExpanded}>
                <Fab onClick={submitNote}>
                    <AddIcon />
                </Fab>
            </Zoom>
        </form>
        </div>
    );
}

export default CreateArea;
