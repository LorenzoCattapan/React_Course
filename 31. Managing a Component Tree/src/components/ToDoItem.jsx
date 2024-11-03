import React from "react";

function ToDoItem(props){
    //ANONYMOUS FUNCTION USED TO PASS DATA WITHOUT CALLING IT ON RENDER
    return (<li 
        onClick={() => {props.onChecked(props.id);}}
    >
        {props.text}
    </li>
    )
}

export default ToDoItem;