import { useState } from "react"
import Content from "./Content"
import Header from "./Header"

const App = () => {
  const [ items, setItems ] = useState([
    {id: 1, item: "Bread", checked: false},
    {id: 2, item: "Pizza", checked: true},
    {id: 3, item: "Candy", checked: false},
  ])

  const handleCheck = (id) => {
    const listItems = items.map((item) => (
      item.id === id ? {...item, checked: !item.checked} : item
    ))
    setItems(listItems)
    localStorage.setItem(JSON.stringify(listItems))
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => (
      item.id !== id
    ))
    setItems(listItems)
  }
  return (
    <div>
      <Header
        title="Grocery list"
      />
      <Content 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </div>
  )
}

export default App