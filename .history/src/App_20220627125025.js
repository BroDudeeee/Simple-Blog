import { useState } from "react"
import Content from "./Content"

const App = () => {
  const[ name, setName ] = useState([
    
  ])

  const changeName = () => {
    const names = ['Rachel','Monica','Phoebe','Joey','Chandler','Ross']
    const nameInt = Math.floor(Math.random() * names.length)
    const name = names[nameInt]
    setName(name)
  }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeName}>Change</button>
    </div>
  )
}

export default App