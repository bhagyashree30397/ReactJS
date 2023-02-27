
import { useState } from 'react';

function App() {
const [task, setTask]=useState("");
const [itemList,setItemList]=useState([]);

const handleInput=(e)=>{
  setTask(e.target.value);
}

const handleAddTask=()=>{
  if(task.length>0){
setItemList((olditem)=>[...olditem,task])}
}

const handleCancelTask=(index)=>{
  const newList= [...itemList]
  newList.splice(index,1)
  setItemList(newList)
}

  return (
    <>
    <h1>To Do List</h1>
    <input type="text" name="Enter your task"  onChange={handleInput}/>&nbsp; 
    <button onClick={handleAddTask}>ADD Task</button>
    <ul>
  {itemList.map((item,index)=>{return <li ket={item.id}>
    {item}&nbsp;
    <button onClick={() => handleCancelTask(index)}>Cancel</button></li>})}
    </ul>
    </>
  );
}

export default App;
