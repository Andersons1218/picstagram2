import {updatePost, deletePost, likePost } from '../utilities/posts-api'
import { useState } from "react";
import UpdatePostForm from "../components/UpdatePostForm";



export default function Post({ user, post, setPost, setPosts, posts }) {
    const allowUpdate = post.user._id === user._id;
    
    const [isUpdate, setIsUpdate] = useState(false);
    const [postData, setPostData] = useState({
      _id: post._id,
      user: post.user._id,
      caption: post.caption,
      image: post.image,
    });
  
    const handleUpdateBtn = (e) => {
      isUpdate ? setIsUpdate(false) : setIsUpdate(true);
    }
  
    const handleDelete = async (event) => {
      event.preventDefault();
      const postObj = {
        _id: post._id,
        user: post.user._id,
      };
      await deletePost(postObj);
      setPosts(posts.filter((item) => item._id !== post._id));
    };
  
    const handleUpdate = async (event) => {
      event.preventDefault();
      const updatedPost = await updatePost(postData);
      setPost(updatedPost);
      setIsUpdate(false);
    };
  
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const likeHandler = async (event) => {
      
      event.preventDefault();
        const postObj = {
        _id: post._id,
        user: user._id,
      };
   
      await likePost(postObj);
      setLike(isLiked ? like - 1 : like + 1);
      setIsLiked(!isLiked);
    };
  
    return (
      <>
        <div className="post">
          <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
               
                <span className="postDate">
                  
                </span>
                <span className="postDate">
               
                </span>
                {allowUpdate && (
                  <div className="updateDeleteButtons">
                    <button className="deleteButton" onClick={handleDelete}>
                      Delete
                    </button>
                    <button
                      className="updateButton"
                      onClick={handleUpdateBtn}
                    >
                      Update
                    </button>
                  </div>
                )}
              </div>
              <div className="postTopRight">
              </div>
            </div>
            {isUpdate ? (
              <div>
                  <UpdatePostForm
                user={user}
                post={post}
                handleUpdate={handleUpdate}
                postData={postData}
                setPostData={setPostData}
              />
              </div>
              
            ) : (
              <div className="postCenter">
                <span className="postText">
                  {post.caption} <hr />
                  <br />
                </span>
                {post.image && <img alt="" src={post.image} />}
              </div>
            )}
            <div className="postBottom">
              <div className="postBottomLeft">
             
                <span className="postFavorites">{like} people liked this</span>
              </div>
              <div className="postBottomRight">
                <span className="postComment">{post.comment}comments</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }