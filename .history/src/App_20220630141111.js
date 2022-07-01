import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'
import { Route, Switch, Routes, useHistory} from 'react-router-dom'
import { useState, useEffect } from 'react'

import "./index.css"
const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Routes>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <NewPost />
        <PostPage />
        <About />
        <Missing />
      </Switch>
      </Routes>
      <Footer />
    </div>
  )
}

export default App