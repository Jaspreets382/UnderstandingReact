import React, { useEffect, useState } from 'react'
import { appWriteService } from '../appwrite/conf'
import { PostForm,Container } from '../components'
import { useNavigate, useParams } from 'react-router-dom'


function EditPost() {
    const navigate=useNavigate()
    const [post,setPost]=useState([])
    const {slug}=useParams()
    useEffect(()=>{
        if(slug){
        appWriteService.getPost(slug)
        .then((post)=>setPost(post))
        }
    },[slug, navigate])
  return post?(
    <div>
        <Container>
            <PostForm post={post}></PostForm>
        </Container>
    </div>
  ):null
}

export default EditPost