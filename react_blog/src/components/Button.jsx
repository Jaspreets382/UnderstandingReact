import React from 'react'

function Button({children,
    type:button,
    textColor="text-white",
    bgColor="bg-blue-100",
    classname='',
    ...props
}) {
  return (
<button className={`px-4 py-2 rounded-lg ${textColor}${bgColor} ${classname}`} {...props}>{children}</button>  )
}

export default Button   