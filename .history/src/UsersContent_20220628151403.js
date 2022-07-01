const UsersContent = ({users}) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {[`{${user.id}, ${user.name}}`]}
        </li>
      ))}
    </ul>
  )
}

export default UsersContent