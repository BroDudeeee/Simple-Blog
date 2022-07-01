const UsersContent = ({users}) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {[`{id: ${user.id}, name: ${user.name}, email: ${user.email}, address: ${[user.address.street]},}`]}
        </li>
      ))}
    </ul>
  )
}

export default UsersContent