import { useState } from "react"
import Content from "./Content"

const App = () => {
  const [ items, setItems ] = useState([
    {id: 1, item: "Bread", checked: false},
    {id: 2, item: "Pizza", checked: true},
    {id: 3, item: "Candy", checked: false},
  ])

  
  return (
    <div>
      <Content 
        items={items}
      />
    </div>
  )
}

export default App