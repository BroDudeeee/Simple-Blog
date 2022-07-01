import { useState } from "react"
import Content from "./Content"

const App = () => {
  const [ name, setName ] = useState('Name')
  return (
    <div>
      <Content />
    </div>
  )
}

export default App