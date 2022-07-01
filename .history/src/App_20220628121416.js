import { useEffect, useState } from "react"
import AddItem from "./AddItem"
import Content from "./Content"
import Footer from "./Footer"
import Header from "./Header"
import SearchItems from "./SearchItems"


const App = () => {
  const API_URL = "http://localhost:3500/items"

  const [ items, setItems ] = useState([])
  const [newItem, setNewItem] = useState('')
  const [ search, setSearch ] = useState('')
  const [fetchError, setFetchError] = useState(null)

  useEffect(() => {

    const fetchItems = async () => {

      try {
        const res = await fetch(API_URL)
        if (!res.ok) throw Error("Did not recieve expected data")
        const listItems = await res.json()
        setItems(listItems)
        setFetchError(null)
      } catch (error) {
        setFetchError(error.message)
      }
    }

    setTimeout(() => ({
      fetchItems()      
    }), 2000)
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
    if (!newItem) return;
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
      <Content
        items={items.filter((item) => (item.item.toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer
        items={items.filter((item) => (item.item.toLowerCase()).includes(search.toLowerCase()))}
      />
    </div>
  )
}

export default App