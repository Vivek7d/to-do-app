import React,{useState} from "react";

function App(){
    const[item,setItem]= useState({
        task:""
    })
    const[list,setList]=useState([])
    function handleChange(event){
        const {value,name}=event.target
        setItem(prevValue=>{
            return{
                ...prevValue.task,
                [name]:value
                
            }
        });
    }
    function handleClick(event){
        setList(prevList=>[...prevList,item.task]);
        setItem({task:""})
        event.preventDefault();
    }
    return(
        <div className="container">
            <div className="card">
                <h1>To-Do List</h1>
                <form>
                    <input onChange={handleChange} type="text" name="task"/>
                    <button onClick={handleClick}>Add</button>
                </form>
                <div className="listContainer">
                    <ul>
                    {list.map((task,index)=>(<li key={index}>{task}</li>))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;