import React from 'react'
import { Container } from '../components'
import PostForm from '../components/PostForm'

function AddPost() {
    return (
        <div className='py-8'>
        <Container>
            <PostForm></PostForm>
        </Container>
        </div>
    )
}

export default AddPost