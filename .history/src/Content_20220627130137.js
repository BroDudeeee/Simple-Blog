const Content = ({ name, changeName}) => {
  return (
    <div>
      <h1 style={{color: 'red'}}>Hello, {name}</h1>
      <button onClick={changeName}>Change</button>
    </div>
  )
}

export default Content