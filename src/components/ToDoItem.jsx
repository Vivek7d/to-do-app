import React from "react";

function ToDoItem(props){
    return(
        <div>
            <li key={props.id}>{props.task}
            <button className="btn" onClick={() => props.onChecked(props.id) }> X </button>
            </li>
        </div>
    );
}
export default ToDoItem;