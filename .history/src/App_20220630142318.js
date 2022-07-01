import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'
import { Route, Routes, Router, useHistory} from 'react-router-dom'
import { useState, useEffect } from 'react'

import "./index.css"
const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post' element={<NewPost />} />
      </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App