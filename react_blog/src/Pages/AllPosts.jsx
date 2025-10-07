import React, { useState,useEffect } from 'react'
import { appWriteService } from '../appwrite/conf'
import { PostForm, Container, PostCard } from '../components'

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appWriteService.getAllPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])  
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                {
                    posts.map((posts)=>(
                        <div key={posts.$id}>
                   <PostCard {...posts}></PostCard>   
                    </div>
                    )               
                )
                }</div>
            </Container>
        </div>
    )
}

export default AllPosts