import React from 'react'

function Button_section(props) {
    console.log(props)
    return (
    <button onClick={()=>props.setColor(props.color)} className='border-4 border-white text-green-300 text-2xl rounded-full p-2' style={{backgroundColor:props.color}}>{props.color}</button>
  )
}

export default Button_section