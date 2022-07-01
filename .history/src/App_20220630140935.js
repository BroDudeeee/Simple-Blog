import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'
import { Route, useHistory} from 'react-router-dom'
import { Switch, } from 'react-router'
import { useState, useEffect } from 'react'

import "./index.css"
const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <NewPost />
        <PostPage />
        <About />
        <Missing />
      </Switch>
      <Footer />
    </div>
  )
}

export default App