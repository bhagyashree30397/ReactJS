import React from 'react';
export default function App(){

  const[counter , setCounter] =React.useState(0);
  const increment=()=>{
    setCounter(counter-1);
  }
  const decrement=()=>{
    setCounter(counter+1);
  }
  return(
  <>
  <div>{counter}</div>
  <input type="button" onClick={increment} value="Increment"/>
  <input type="button" onClick={decrement} value="Decrement"/>
  </>
  )
    
  }
