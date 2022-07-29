import FileBase64 from "react-file-base64";
import { useParams } from "react-router-dom";
import { useState } from "react";

const UpdatePostForm = ({
  post,
  handleUpdate,
  postData,
  setPostData,
}) => {
  
  

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <>
      <div onSubmit={handleUpdate}>
        <form autoComplete="off">
          <div className="newPostsContainer">
            <div className="newPostsTop">
              <input
                placeholder={post.caption}
                type="text"
                name="caption"
                value={postData.caption}
                onChange={handleChange}
              />
            </div>

            <p className="newPostsText">Choose a different image</p>
            <div>
              <div className="newPostsOptions">
                <div className="option">
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
              <img src={post.image} alt="" />
              <button type="submit">Done</button>
            </div>
          </div>
        </form>
      </div>
      <div></div>
    </>
  );
};

export default UpdatePostForm;
