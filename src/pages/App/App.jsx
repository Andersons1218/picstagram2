import './App.css';
import { useState } from 'react'
import AuthPage from '../AuthPage/AuthPage';
import { Routes, Route } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import { getUser } from '../../utilities/users-service'
import CreatePost from '../CreatePost/CreatePost'

export default function App() {
  const [user, setUser] = useState(getUser())
  return (
    <main className="App">
      {user ?
      <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/createPost" element={<CreatePost />} />
          </Routes>
      </>
      :
      <AuthPage setUser={setUser} />}
    </main>
  );
}