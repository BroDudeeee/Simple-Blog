const Content = ({ name, changeName}) => {
  return (
    <div>
      <h1 style={{color: 'green'}}>Hello, {name}</h1>
      <button onClick={changeName}>Change</button>
    </div>
  )
}

export default Content