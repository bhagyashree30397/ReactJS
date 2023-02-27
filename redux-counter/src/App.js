
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App(){

  const state=useSelector((state)=>state);
  const dispatch=useDispatch();
  return(
      <>
      {state.count}
      <ul>   {state.history.map(item=>{return <li>{item}</li>})}</ul>
   
      <button onClick={()=>dispatch({type:'ADD'})}>ADD</button>
      <button onClick={()=>dispatch({type:'SUBSTRACT'})}>SUBSTRACT</button>
      </>
  )
}

export default App;