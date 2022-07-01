const UsersContent = ({users}) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {}
        </li>
      ))}
    </ul>
  )
}

export default UsersContent