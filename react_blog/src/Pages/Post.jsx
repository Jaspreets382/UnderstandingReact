import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { appWriteService } from '../appwrite/conf'
import { Container,Button } from '../components'
import parse from 'html-react-parser';
import { Link } from 'react-router-dom'

function Post() {
    const [post, setPost] = useState()
    const navigate = useNavigate()
    const { slug } = useParams()
    const userData = useSelector((state) => state.auth.userdata.userData);
    const isAuthour = post && userData ? post.userId === userData.$id : false;
//     console.log("Post:", post);
// console.log("UserData:", userData);
// console.log("isAuthor:", isAuthour);
// console.log(typeof post.userId, post.userId);
// console.log(typeof userData?.$id, userData?.$id);


    
    useEffect(() => {
        if (slug) {
            appWriteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post)
                    console.log(post)
                }
                else {
                    navigate("/")
                }
            }
            )
    }
        else {
            navigate("/")
        }
    }, [slug,navigate])
    const deletePost=()=>{}
    
  
    const imgUrl=post? appWriteService.getFilePrev(post.featuredImage):undefined;

    return post? (
        <div className="py-8">
            <Container>
              
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={imgUrl.toString()}
                        alt={post.title}
                        className="rounded-xl"
                    />

                    {isAuthour && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(post.content)}
                    </div>
            </Container>
        </div>
    ) : null;
}

export default Post