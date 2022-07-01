const UsersContent = ({users}) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {[`{"id": ${user.id}, "name": ${user.name}, "email": ${user.email}, "address": {["street": ${user.address.street}, "suite": ${user.address.suite}, "city": ${user.address.city}, "zipcode": ${user.address.zipcode}, "geo": {["lat": ${user.address.geo.lat}, "lng": ${user.address.geo.lng}]}],}"phone": ${user.phone}, "website" ${user.website} }`]}
        </li>
      ))}
    </ul>
  )
}

export default UsersContent