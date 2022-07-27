import FileBase64 from 'react-file-base64';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function NewPost({ user, setUser }) {
    const 
    
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
        <FileBase64 />
        <button type="submit">Submit</button>
      </form>
      <Link to="/">Back to home</Link>
    </div>
    )
}