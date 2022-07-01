import { useEffect, useState } from "react"
import Posts from "./Posts"
import Users from "./Users"

const App = () => {
  const [items, setItems] = useState([])
  const [id, setId] = useState('users')
  const [fetchError, setFetchError] = useState(null)

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
       const listUsers = await res.json()
       {id === "users"} {setItems(listUsers)}
       setFetchError(null)
      } catch (error) {
        setFetchError(error.message)
      }
    }
    fetchUsers()
  })

  return (
    <div>
      {fetchError && <p style={{color: "red"}}>Did not recieve expected data</p>}
      <button onClick={handleUsersId}>users</button>
      <button onClick={handlePostsId}>posts</button>
      <button onClick={handleCommentsId}>comments</button>
      {!fetchError && <div>
        {id === "users" && <Users
          users={items}
        />}
      </div>}
    </div>
  )
}

export default App