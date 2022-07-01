import { useState } from "react"
import Content from "./Content"

const App = () => {
  const [ items, setItems ] = useState([
    {id: 1, item: "Bread", checked: false},
    {id: 2, item: "Pizza", checked: true},
    {id: 3, item: "Candy", checked: false},
  ])

  const handleCheck = (id) => {
    const listItems = items.map((item) => {
      item.id === id ? {...item, checked: !item.checked} : item
    })
    setItems(listItems)
  }
  return (
    <div>
      <Content 
        items={items}
      />
    </div>
  )
}

export default App