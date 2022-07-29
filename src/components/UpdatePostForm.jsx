

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
              <div className="newPostsOptions">
                <div className="option">
                </div>
              </div>
    
              <button type="submit">Done</button>
            </div>
        </form>
      </div>
      <div></div>
    </>
  );
};

export default UpdatePostForm;
