import React, { useState } from 'react'
import './App.css'
import Card from './Card';
function App() {
  
  let [counter ,setCounter]=useState(0);
  function addCount(){
    setCounter(counter+1);
  }
  const removeCounter=()=>{
    setCounter(counter -1);
  }
  return (
    <div>
      <h1 className='bg-blue-400 border-4 border-yellow-500 p-4 text-black rounded-2xl'>hello jass this side </h1>
      <h2> counter is {counter} </h2>
      <button onClick={addCount}>Add counter</button>
      <button onClick={removeCounter}>Remove counter</button>
      <Card price="$45" title="bored Monkey" />
      <Card />
      
      
    </div>
  )
}

export default App