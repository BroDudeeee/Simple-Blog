import { useEffect, useState } from "react"
import UsersContent from "./UsersContent"

const App = () => {
  const [users, setUsers] = useState([])
  const [id, setId] = useState('users')
  const [fetchError, setFetchError] = useState(null)

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
      <button>users</button>
      <button>posts</button>
      <button>comments</button>
      {!fetchError && <div>
        <UsersContent
          users={users}
        />
      </div>}
    </div>
  )
}

export default App