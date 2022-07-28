
import FileBase64 from "react-file-base64";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { createPost } from '../utilities/posts-api'

export default function NewPost({ user, post, setPost }) {
  let { userId } = useParams();
  const [isNewPostCreated, setIsNewPostCreated] = useState(false)
  const [postData, setPostData] = useState({
    user: user._id,
    likes: 0,
    description: "",
    image: "",
  });

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = await createPost(postData);
    setPost(newPost);
    setIsNewPostCreated(true)
    setPostData({
      user: user._id,
      likes: 0,
      description: "",
      image: "",
    })
  };

  // useEffect(() => {
  //   isNewPostCreated && setIsNewPostCreated(false)
  // }, [post])

  return (
    <>
      <div className="newPosts" onSubmit={handleSubmit}>
        <form autoComplete="off">
          <div className="newPostsContainer">
            <div className="newPostsTop">
              <img
                className="profilePicture"
                src={user.avatar}
                alt="Add Photo"
              />
              <input
                placeholder="Add a caption..."
                className="newPostInput"
                type="text"
                name="description"
                value={postData.caption}
                onChange={handleChange}
                required
              />
            </div>
            <hr className="newPostHr" />
            <div className="newPostsBottom">
              <div className="newPostsOptions">
                <div className="option">
                  <span className="newPostsText">Photo</span>
                  <FileBase64
                    type="file"
                    multiple={false}
                    name="image"
                    onDone={({ base64 }) =>
                      setPostData({ ...postData, image: base64 })
                    }
                  />
                </div>
              </div>
              <button className="addPost" type="submit">
                Add post
              </button>
            </div>
          </div>
        </form>
      </div>
      <h1>
      {isNewPostCreated ? 'post created' : 'no new post created yet'}
      </h1>
      <div className="post">
        <div className="postWrapper">
          <div className='postText'>
            <span className='postCreated'>{!postData.caption ? 'About?' : postData.caption}</span>
               <hr />
              <br />
            <img alt="" src={postData.image} />
          </div>
        </div>
      </div>
    </>
  );
}