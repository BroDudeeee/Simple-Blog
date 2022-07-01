import { useState } from "react"
import Content from "./Content"

const App = () => {
  const[ names, setNames ] = useState([
    'Rachel',
    'Monica',
    'Phoebe',
    'Joey',
    'Chandler',
    'Ross'
  ])

  const changeName = () => {
    const nameInt = Math.floor(Math.random() * names.length)
    const name = names[nameInt]
    console.log(name)
    setNames(name)
  }
  return (
    <div>
      <Content 
        changeName={changeName}
        names={names}
      />
    </div>
  )
}

export default App