import React,{useState} from "react";
import ToDoItem from "./ToDoItem";

function App(){
    const[item,setItem]= useState("")
    const[list,setList]=useState([])
    function handleChange(event){
        const newValue=event.target.value
        setItem(newValue);
    }
    function handleClick(event){
        setList(prevList=>[...prevList,item]);
        setItem("")
        event.preventDefault();
    }
    function deleteItem(id){
        setList(prevValue=>{
            return prevValue.filter(
                (items,index)=>{
                    return index !==id
                }
            )
        });
    }
    return(
        <div className="container">
            <div className="card">
                <h1>To-Do List</h1>
                <form>
                    <input onChange={handleChange} type="text" value={item} />
                    <button onClick={handleClick}>Add +</button>
                </form>
                <div className="listContainer">
                    <ul>
                    {list.map((task,index)=>(
                        <ToDoItem key={index}
                            id={index}
                            onChecked={deleteItem}
                            task={task}
                        />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;