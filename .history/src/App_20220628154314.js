import { useEffect, useState } from "react"
import UsersContent from "./UsersContent"

const App = () => {
  const [users, setUsers] = useState([])
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
       setUsers(listUsers)
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
        <UsersContent
          users={users}
        />
      </div>}
    </div>
  )
}

export default App