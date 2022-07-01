const UsersContent = ({users}) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user[1]}
        </li>
      ))}
    </ul>
  )
}

export default UsersContent