import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'
import { Router, Route, Routes, useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'

import "./index.css"
import Layout from './Layout'
const App = () => {
  return (
    <div>
      <Router>
      <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="post" element={<NewPost />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      </Layout>
      </Router>
    </div>
  )
}

export default App