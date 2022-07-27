import FileBase64 from 'react-file-base64';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function NewPost({ user, setUser }) {
    
    const [createPost, setCreatePost] = useState(false);
    const [postD, setPostD] = useState({
        user: user._id,
        likes: 0,
        caption: '',
        image: '',
    });

    const handleChange = async (e) => {
        setPostD({
          ...postD,
          [e.target.name]: e.target.value,
        });
      };
    
      const handlesubmit = async (e) => {
        e.preventDefault();
        const newPost = await createPost(postD);
        setPostD(newPost);
        setCreatePost()
        setPostD({
          user: user._id,
          likes: 0,
          description: "",
          image: "",
        })
      };
    
    return(
     <div>
      <h1>New Post</h1>
      <hr />
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="Enter caption"
          name="description"
          onChange={handleChange}/>
        <FileBase64 
        type="file"
        multiple={false}
        name="image"
        onDone={({ base64 }) =>
        setPostD({ ...postD, image: base64 })
        }/>
        <button type="submit">Add Post</button>
      </form>
      <Link to="/">Back to home</Link>
    </div>
    
    )
}