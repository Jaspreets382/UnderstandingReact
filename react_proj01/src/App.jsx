import React, { useState } from 'react'
import Button_section from './button-section'
import './App.css'


function App() {
  const [colour,setColor]=useState("yellow")
  return (
    <>
    <div className='text-5xl text-white bg-green-500 p-4 rounded-full m-2'>Click on the buttons to change the backgroundColor</div>
    <div style={{backgroundColor:colour}} className=' w-full h-screen'></div>
   <div className=' bg-green-200 flex justify-evenly w-6xl fixed bottom-10 right-35 border-4 rounded-full border-dotted p-4 ' >
    <Button_section color="blue" setColor={setColor} />
    <Button_section color="red" setColor={setColor} />
    <Button_section color="orange" setColor={setColor}/>
    <Button_section color="olive" setColor={setColor}/>
    <Button_section color="purple" setColor={setColor}/>
  </div>
  
  </>)
}

export default App