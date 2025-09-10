import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import "./App.css"
import { useCallback } from 'react';

function App() {
  const [length,setLength]=useState(8);
  const [numberAllow,setNumberAllow]=useState(false);
  const [charAllow,setCharAllow]=useState(false);
  const[password,setPass]=useState("");
  const PasswordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllow) str+="0123456789";
    if(charAllow)str+="!@#$%^&*({})";

    for (let i = 1; i <=length; i++) {
      const char= Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPass(pass)

  },[numberAllow,charAllow,length,setPass])

  const PassRef=useRef(null);
  const copyPass=useCallback(()=>{
    PassRef.current?.select();
    window.navigator.clipboard.writeText(password) 
  },[password])

  useEffect(()=>PasswordGenerator(),[length,numberAllow,charAllow,setPass])

  return (
    <>
    <div className='bg-black h-screen w-full '>
      <p className='bg-gray-600 text-4xl text-white m-2 my-4 rounded-full w-fit p-4 '>Password Generator</p>
      <div className='flex text-2xl text-white m-6'>
        <input className='bg-amber-100 p-6 w-120 text-black ' type="text" readOnly placeholder={password}
        ref={PassRef} />
        <button className='bg-green-400 w-50  ' onClick={copyPass}>Copy</button>
      </div>
      <div className='flex text-white text-xl m-6 gap-8 '>
        <input type="range" 
         min={8} 
         max={100} 
         value={length}
         onChange={(e)=>{
          setLength(e.target.value)
         } } className='cursor-pointer' />
         <label > length:{length}</label>
        <div className='flex gap-4 '>
           <input type="checkbox"
           defaultChecked ={numberAllow}
           onChange={()=>{
            setNumberAllow((prev)=> !prev)
           }} />
         <label > Numbers</label>
         <input type="checkbox"
         defaultChecked={charAllow} 
         onChange={()=>{
          setCharAllow((prev)=> !prev)
         }}/>
         <label > Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App