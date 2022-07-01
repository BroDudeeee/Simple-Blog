const UsersContent = ({users}) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {[user]}
        </li>
      ))}
    </ul>
  )
}

export default UsersContent