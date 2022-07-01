import { useEffect, useState } from "react"
import Comments from "./Comments"
import Posts from "./Posts"
import Users from "./Users"

const App = () => {
  const [items, setItems] = useState([])
  const [id, setId] = useState('users')
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const handleUsersId = () => {
    setId("users")
  }
  const handlePostsId = () => {
    setId("posts")
  }
  const handleCommentsId = () => {
    setId("comments")
  }

  useEffect(() => {

    const fetchUsers = async () => {
      try {
       const res = await fetch(`https://jsonplaceholder.typicode.com/${id}`)
       if (!res.ok) throw Error ('Did not recieve expected data')
       const data = await res.json()
       setItems(data)
       setFetchError(null)
      } catch (error) {
        setFetchError(error.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchUsers()
  }, [id])

  return (
    <div>
      {fetchError && <p style={{color: "red"}}>Did not recieve expected data</p>}
      <button onClick={handleUsersId}>users</button>
      <button onClick={handlePostsId}>posts</button>
      <button onClick={handleCommentsId}>comments</button>
      {isLoading && <p style={{color: "blue"}}>Loading...</p>}
      {!fetchError &&  !isLoading && <div>
        {id === "users" &&<Users
          users={items}
        />}
        {id === "posts" &&<Posts 
          posts={items}
        />}
        {id === "comments" &&<Comments
          comments={items}
        />}

      </div>}
    </div>
  )
}

export default App