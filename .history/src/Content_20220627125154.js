const Content = ({ changeName, name }) => {
  
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeName}>Change</button>
    </div>
  )
}

export default Content