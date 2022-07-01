import { useState } from "react"
import Content from "./Content"

const App = () => {
  const [ name, setName ] = useState('Name')

  const changeName = () => {
    const names = [
      'Rachel',
      'Monica',
      'Phoebe',
      'Joey',
      'Chandler',
      'Ross'
    ]
    const nameInt = Math.ceil(Math.random() * names.length)
    const randName = names[nameInt]
    setName(randName)
  }
  return (
    <div>
      <Content 
        name={name}
        changeName={changeName}
      />
    </div>
  )
}

export default App