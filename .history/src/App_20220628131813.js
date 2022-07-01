import { useEffect, useState } from "react"
import AddItem from "./AddItem"
import Content from "./Content"
import Footer from "./Footer"
import Header from "./Header"
import SearchItems from "./SearchItems"
import apiRequest from "./apiRequest"


const App = () => {
  const API_URL = "http://localhost:3500/items"

  const [ items, setItems ] = useState([])
  const [newItem, setNewItem] = useState('')
  const [ search, setSearch ] = useState('')
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    const fetchItems = async () => {
      try {
        const res = await fetch(API_URL)
        if(!res.ok) throw Error("Did not recieve expected data")
        const listItems = await res.json()
        setItems(listItems)
        setFetchError(null)
      } catch (error) {
        setFetchError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    setTimeout(() => (
      fetchItems()
    ), 2000)
  }, [])

  const addNewItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = {id, item, checked: false}
    const listItems = [...items, myNewItem]
    setItems(listItems)
    localStorage.setItem('shoppinglist', JSON.stringify(listItems))

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }
    const result = await apiRequest (API_URL, postOptions)
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
      <main>
        {isLoading && <p style={{color: "blue"}}>Loading...</p>}
        {fetchError && <p style={{color: 'red'}}>{fetchError}</p>}
        {!isLoading && !fetchError && <Content
          items={items.filter((item) => (item.item.toLowerCase()).includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />}
      </main>
      <Footer
        items={items.filter((item) => (item.item.toLowerCase()).includes(search.toLowerCase()))}
      />
    </div>
  )
}

export default App