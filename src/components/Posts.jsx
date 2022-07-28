import React from 'react'
import Post from '../components/Post'
import { postsAPI } from ''
import { useState, useEffect } from 'react'

const Posts = ({filterUserId, user, post, setPost}) => {
  const [posts, setPosts] = useState('')
  useEffect(() => {
    const getPosts = async () => {
      const updatedPosts = await postsAPI.getPosts(filterUserId)
      setPosts(updatedPosts)
    }
    getPosts()
  }, [post])
  
  
  return (
    <div>
        <h1>Posts</h1>
        {posts ?  
        posts.map(item => <Post posts={posts} setPosts={setPosts} user={user} post={item} setPost={setPost}/>)
        : <p>Loading...</p>}
    </div>
  )
}

export default Posts