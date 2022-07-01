const Content = ({ changeName, name }) => {
  
  return (
    <div>
      <p>{name}</p>
      <button onClick={changeName}>Change</button>
    </div>
  )
}

export default Content