import { updatePost, deletePost, likePost, createComment } from "../../utilities/posts-api";
import { useState } from "react";
import UpdatePostForm from "../UpdatePostForm";
import { MoreVert, Favorite } from "@mui/icons-material/";
import moment from "moment";
import { Avatar } from "@mui/material";
import './Post.css';

export default function Post({ user, post, setPost, setPosts, posts }) {
  const allowUpdate = post.user === user._id;
  
  const [isUpdate, setIsUpdate] = useState(false);
  const [postData, setPostData] = useState({
    _id: post._id,
    user: post.user._id,
    caption: post.caption,
    image: post.image,
  });

  const handleUpdateBtn = (e) => {
    isUpdate ? setIsUpdate(false) : setIsUpdate(true);
  };



  const handleDelete = async (e) => {
    e.preventDefault();
    console.log("delete");
  deletePost(post._id);
    console.log('omg just delete')
    setPosts(posts.filter((item) => item._id !== post._id));
  };
  

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log("update");
    const updatedPost = await updatePost(postData);
    setPostData(updatedPost);
    setIsUpdate(false);
  };

  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const likeHandler = async (e) => {
    e.preventDefault();
    const postObj = {
      _id: post._id,
      user: user._id,
    };

    await likePost(postObj);
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
const [comment, setComment] = useState('');

  const handleComment = async (e) => {
    e.preventDefault()
    console.log("comment");
   createComment(post._id, comment);
    setComment('');
  }

  const handleChange = (e) => {
    if (e.target.name === "comment"){
      setComment(e.target.value)
    } else {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    })};
  };

  return (
    <>
      <div className="post">
        <div className="post__header">
                <Avatar alt="User profile image" />
                
                <div className="post__avatar">{post.user.name}</div>
              <span className="postDate">
                Created: {new Date(post.createdAt).toLocaleDateString()}{" "}
              </span>
              <br />
              <span className="postDate">
                Updated: {moment(post.updatedAt).fromNow()}
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
                  {/* {console.log("isUpdate: ", isUpdate)} */}
                </div>
              )}
            
              <MoreVert />
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
            <div className="post__image">
              <span className="post__text">
                {post.caption}
              </span>
              {post.image && <img alt="" src={post.image} />}
            </div>
          )}
          <div className="postBottom">
            <div className="postBottomLeft">
              <Favorite onClick={likeHandler} />
              <span className="postFavorites">{like} and others liked this</span>
            </div>
            <div className="post__text">
              <form className="comment__form">
                <div className="comment__wapper">
                <input
                className="comment__Input"
              placeholder="Add a comment..."
              type="text"
              name="comment"
              value={comment}
              onChange={handleChange}
              />
              <br />
                <button className='comment__button text__button' onClick={handleComment}>Add A Comment</button>
                </div>
             </form>
              {post.comments.map((c) => ( 
               <span className="postComment"><p>{c.user}: {c.comment}</p></span>
                ))}
                <hr></hr>
            </div>
          </div>
      
    </>
  )
}