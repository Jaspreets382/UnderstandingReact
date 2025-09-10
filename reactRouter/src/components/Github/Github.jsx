import React from 'react'
import { useLoaderData } from 'react-router'

function Github() {
    const data=useLoaderData()
  return (
    <>
    <div className='bg-gray-600 text-white text-3xl text-center '>Github followers : {data.followers}
    <img src={data.avatar_url} alt="" /></div>
    </>
  )
}

export default Github

export const GithubInfo=async()=>{
     
    const response=await fetch('https://api.github.com/users/Jaspreets382')
    return response.json();
}