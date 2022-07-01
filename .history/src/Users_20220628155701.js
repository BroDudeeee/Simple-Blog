const Users = ({users}) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {[`{"id": ${user.id}, "name": ${user.name}, "email": ${user.email}}`]}
        </li>
      ))}
    </ul>
  )
}

export default Users