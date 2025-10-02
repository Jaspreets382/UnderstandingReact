import React, { forwardRef, useId } from 'react'

const Input=forwardRef(function Input({
    label,
    type='text',
    classname='',
    ...props
},ref){
    const id= useId()
    return(
        <div>
   {label && <label
    htmlFor={ref} 
     className={` ${classname}`} >{label}</label>}

     <input type={type} 

        ref={ref}
     className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${classname}`}{...props}
     id={id}
      />
    </div>
    )
})

export default Input