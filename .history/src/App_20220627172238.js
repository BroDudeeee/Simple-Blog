import { useEffect, useState } from "react"
import AddItem from "./AddItem"
import Content from "./Content"
import Footer from "./Footer"
import Header from "./Header"
import SearchItems from "./SearchItems"


const App = () => {
  const [ items, setItems ] = useState([])
  const [newItem, setNewItem] = useState('')
  const [ search, setSearch ] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
   try {
    console.log("try")
   } catch (error) {
    console.log("catch")
   } finally {
    console.log("Finally")
   }
  }, [])

  const addNewItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = {id, item, checked: false}
    const listItems = [...items, myNewItem]
    setItems(listItems)
    localStorage.setItem('shoppinglist', JSON.stringify(listItems))
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => (
      item.id === id ? {...item, checked: !item.checked} : item
    ))
    setItems(listItems)
    localStorage.setItem('shoppinglist', JSON.stringify(listItems))
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => (
      item.id !== id
    ))
    setItems(listItems)
    localStorage.setItem('shoppinglist', JSON.stringify(listItems))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addNewItem(newItem)
    setNewItem('')
  }
  return (
    <div>
      <Header
        title="Grocery list"
      />
      <AddItem 
        handleSubmit={handleSubmit}
        newItem={newItem}
        setNewItem={setNewItem}
      />
      <SearchItems 
        search={search}
        setSearch={setSearch}
      />
      {isLoading && "Loading..."}
      {!isLoading && <Content
        items={items.filter((item) => (item.item.toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />}
      <Footer
        items={items.filter((item) => (item.item.toLowerCase()).includes(search.toLowerCase()))}
      />
    </div>
  )
}

export default App