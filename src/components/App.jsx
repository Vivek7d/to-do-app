import React,{useState} from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App(){
    const[list,setList]=useState([])
    
    function handleClick(items){
        setList((prevList)=>{
            return[...prevList,items];
        })
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
                <InputArea onAdd={handleClick} />
                    
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