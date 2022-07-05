import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'
import { Route, Routes, useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { format } from 'date-fns'

import "./index.css"
import Layout from './Layout'
const App = () => {

  const [posts, setPosts] = useState([
    {
      "id": 1,
      "title": "My First Post",
      "datetime": "May14 2022 11:23pm",
      "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "id": 2,
      "title": "My Second Post",
      "datetime": "May14 2022 11:23pm",
      "body": "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "id": 3,
      "title": "My Third Post",
      "datetime": "May14 2022 11:23pm",
      "body": "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
    },
    {
      "id": 4,
      "title": "My Fourth Post",
      "datetime": "May14 2022 11:23pm",
    "body": "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit"
    }
  ])
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const navigate = useNavigate()
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')

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
