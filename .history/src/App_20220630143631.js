import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'
import { Route, Routes, useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'

import "./index.css"
const App = () => {
  return (
    <div>
      <Home />
      <NewPost />
      <PostPage />
      <About />
      <Missing />
    </div>
  )
}

export default App