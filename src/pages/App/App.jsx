import './App.css';
import { useState } from 'react'
import AuthPage from '../AuthPage/AuthPage';
import { Routes, Route } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import { getUser } from '../../utilities/users-service'
import CreatePost from '../CreatePost/CreatePost'
import HomePage from '../HomePage/HomePage'

export default function App() {
  const [user, setUser] = useState(getUser())
  const [post, setPost] = useState("")
  return (
    <main className="App">
      {user ?
      <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<HomePage user={user} setUser={setUser} post={post} />} />
            <Route path="/createPost" element={<CreatePost user={user} setUser={setUser} post={post} />} />
          </Routes>
      </>
      :
      <AuthPage setUser={setUser} />}
    </main>
  );
}