const Content = ({ name, changeName}) => {
  return (
    <div>
      <h1>Hello, {name}</h1>
      <button onClick={changeName}>Change</button>
    </div>
  )
}

export default Content