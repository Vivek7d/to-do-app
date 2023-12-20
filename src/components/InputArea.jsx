
import React, { useState } from "react";

function InputArea(props) {
    const[item,setItem]= useState("")

    function handleChange(event){
        const newValue=event.target.value
        setItem(newValue);
    }
  return (
    <div>
        <input onChange={handleChange} type="text" value={item} />
        <button 
         onClick={(event) => {
          props.onAdd(item);
          setItem("");
          event.preventDefault();
        }}>Add +</button>
    </div>
  );
}

export default InputArea;
