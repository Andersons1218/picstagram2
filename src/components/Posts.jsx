import * as postAPi from '../utilities/posts-api'
import {useState, useEffect} from 'react'


export default function Posts({ user, setUser, post }) {
    const [post , setPost] = useState()
useEffect(() => {
    const getPost = async () => {
        const post = await postAPi.getPost(post._id)
        setPost(post)
    }
    getPost()
}, [])

  return (
    <>
      <div>
        <h1>Post</h1>
        {post ?  
        post.map(item => <Post posts={posts} setPosts={setPosts} user={user} post={item} setPost={setPost}/>):}
      </div>
    </>
  );
  }