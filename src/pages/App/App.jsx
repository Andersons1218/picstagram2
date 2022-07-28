import NavBar from "../../components/NavBar";
import AuthPage from "../AuthPage/AuthPage";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import HomePage from "../HomePage/HomePage";
import CreatePost from "../../pages/CreatePost/CreatePost";


export default function App() {
  const [user, setUser] = useState(getUser());
  const [post, setPost] = useState("");

  return (
    <div className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route
              path="/createPost"
              element={<CreatePost user={user} post={post} setPost={setPost} />}
            ></Route>
            <Route
              path="/"
              element={<HomePage user={user} post={post} setPost={setPost} />}
            ></Route>
            <Route path="/*" element={<Navigate to="/api/posts" />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<AuthPage setUser={setUser} />} />
        </Routes>
      )}
    </div>
  );
}