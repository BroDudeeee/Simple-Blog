import { useEffect, useState } from "react"
import UsersContent from "./UsersContent"

const App = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/users"
  const [users, setUsers] = useState([])
  const [fetchError, setFetchError] = useState(null)

  useEffect(() => {

    const fetchUsers = async () => {
      try {
       const res = await fetch(API_URL)
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
      {!fetchError && <div>
        <UsersContent
          users={users}
        />
      </div>}
    </div>
  )
}

export default App