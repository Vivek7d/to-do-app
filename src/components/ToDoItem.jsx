import React, { useState } from "react";

function ToDoItem(props) {
  const [line, setLine] = useState(false);
  function handleLine() {
    setLine((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <div>
      <li
        onClick={handleLine}
        style={{ textDecoration: line ? "line-through" : "none" }}
        key={props.id}
      >
        {props.task}
        <button className="btn" onClick={() => props.onChecked(props.id)}>
          {" "}
          X{" "}
        </button>
      </li>
    </div>
  );
}
export default ToDoItem;
