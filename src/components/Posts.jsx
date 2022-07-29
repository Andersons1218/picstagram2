import React from 'react'
import Post from '../components/Post'
import { useState, useEffect } from 'react'
import * as postsAPI from '../utilities/posts-api'

const Posts = ({user, post, setPost}) => {
  const [posts, setPosts] = useState('')
  useEffect(() => {
    const getPosts = async () => {
      const updatedPosts = await postsAPI.getAllPosts()
      setPosts(updatedPosts)
      console.log(updatedPosts)
    }
    getPosts()
  }, [])
  
  
  return (
    <div>
        
        <div>
        {posts ?  
        posts.map(item => <Post posts={posts} setPosts={setPosts} user={user} post={item} setPost={setPost}/>)
        : <p>feed starts here</p>}
        </div>
        
    </div>
  )
}

export default Posts