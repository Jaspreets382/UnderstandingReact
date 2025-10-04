import React, { forwardRef, useId } from 'react'

 export const INPUT=forwardRef(function Input({
    label,
    type='text',
    className='',
    ...props
},ref){
    const id= useId()
    return(
        <div>
   {label && <label
    htmlFor={id} 
     className={` ${className}`} >{label}</label>}

     <input type={type} 

        ref={ref}
     className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}{...props}
     id={id}
      />
    </div>
    )
})
