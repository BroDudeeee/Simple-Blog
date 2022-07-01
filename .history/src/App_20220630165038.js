import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'
import { Route, Routes, useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'

import "./index.css"
import Layout from './Layout'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route index element={<Home />} />
        <Route index path="post" element={<NewPost />} />
        <Route index path="/post/:id" element={<PostPage />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  )
}

export default App