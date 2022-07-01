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
    },
  ])

  return (
    <div className='flex flex-col justify-between text-lg max-w-6xl mx-auto pb-8 mb-16'>
      <Routes className="px-8">
        <Route path='/' element={<Layout />}>
          <Route index element={<Home posts={posts} />} />
          <Route path='post'>
            <Route index element={<NewPost />} />
            <Route path=':id' element={<PostPage posts={posts} />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App