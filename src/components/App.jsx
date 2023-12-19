import React,{useState} from "react";

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
    function handleDelete(index){
        setList(prevList=>prevList.filter((_, i) => i !== index));
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
                        <li key={index}>{task}
                        <button className="btn" onClick={() => handleDelete(index) }> X </button>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;