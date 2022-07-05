import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'
import { Route, Routes, useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import api from './api/posts'

import "./index.css"
import Layout from './Layout'
const App = () => {

  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const navigate = useNavigate()
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')

  useEffect(() => {

    const fetchPosts = async () => {
      try {
        const res = await api.get('./posts')
        setPosts(res.data)
      } catch (error) {
        if (error.response) {
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else {
          console.log(`Error: ${error.message}`)
        }
      }
    }
    fetchPosts()
  })

  useEffect(() => {
    const filteredResults = posts.filter(post => ((post.title).toLowerCase()).includes(search.toLowerCase()) || ((post.body).toLowerCase()).includes(search.toLowerCase()))

    setSearchResults(filteredResults.reverse())
  }, [posts, search])

  const handleDelete = (id) => {
    const postsList = posts.filter((post) => post.id !== id)
    setPosts(postsList)
    navigate('/', {replace: true})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const newPost = {id, title: postTitle, body: postBody, datetime: datetime}
    const postsList = [...posts, newPost]
    setPosts(postsList)
    navigate('/', {replace: true})
    setPostTitle('')
    setPostBody('')
  }

  return (
    <div className='flex flex-col justify-between text-lg max-w-6xl mx-auto pb-8 mb-16'>
      <Routes>
        <Route path='/' element={<Layout search={search} setSearch={setSearch} />}>
          <Route index element={<Home posts={searchResults} />} />
          <Route path='post'>
            <Route index element={<NewPost postTitle={postTitle} postBody={postBody} setPostTitle={setPostTitle} setPostBody={setPostBody} handleSubmit={handleSubmit} />} />
            <Route path=':id' element={<PostPage posts={posts} handleDelete={handleDelete} />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
