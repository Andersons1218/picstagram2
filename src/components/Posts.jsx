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
        <h1>Posts</h1>
        <div>
        {posts ?  
        posts.map(item => <Post posts={posts} setPosts={setPosts} user={user} post={item} setPost={setPost}/>)
        : <p>feed starts here</p>}
        </div>
        <h1>testing to see if this works</h1>
    </div>
  )
}

export default Posts