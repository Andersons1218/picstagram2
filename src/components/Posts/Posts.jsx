import React from "react";
import Post from "../Post/Post";
import { useState, useEffect } from "react";
import * as postsAPI from "../../utilities/posts-api";
import './Posts.css';


const Posts = ({ user, post, setPost }) => {
  const [posts, setPosts] = useState("");
  useEffect(() => {
    const getPosts = async () => {
      const updatedPosts = await postsAPI.getAllPosts();
      setPosts(updatedPosts);
      console.log(updatedPosts);
    };
    getPosts();
  }, []);

  return (
    <div>
      <div className="timeline">
        {posts ? (
          posts.map((item) => (
            <Post
              posts={posts}
              setPosts={setPosts}
              user={user}
              post={item}
              setPost={setPost}
            />
          ))
        ) : (
          <p>loading content...</p>
        )}
      </div>
    </div>
  );
};

export default Posts;
