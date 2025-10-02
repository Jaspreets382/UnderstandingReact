import React, { forwardRef, useId } from 'react'

function Select({
    label,classname='',
    options 
},ref) {
    const id=useId()
  return (
   <>
   {label && <label htmlFor={id} ></label>
   }
   <select  id={id}
   ref={ref}>
    {options?.map((option)=>(
        <option key={option} value={option}>
            {option}
        </option>
    ))}
   </select>
   </>
  )
}

export default forwardRef(Select)