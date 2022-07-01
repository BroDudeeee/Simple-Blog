const Content = ({ changeName, names }) => {
  return (
    <div>
      <p>{names}</p>
      <button onClick={changeName}>Change</button>
    </div>
  )
}

export default Content