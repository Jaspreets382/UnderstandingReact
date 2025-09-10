import React from 'react'
import { useParams } from 'react-router'
function User() {
    const {id}=useParams()
  return (
    <div className='text-center bg-gray-700 p-4 text-white font-bold text-3xl'>User:{id} </div>
  )
}

export default User