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
  return (
    <main className="App">
      {user ?
      <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/createPost" element={<CreatePost user={user} />} />
          </Routes>
      </>
      :
      <AuthPage setUser={setUser} />}
    </main>
  );
}