import { useEffect, useState } from 'react';
import AddItem from './AddItem';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import SearchItems from './SearchItems';

function App() {
  const API_URL = "http://localhost:3500/itemss"
  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')
  const [fetchError, setFetchError] = useState(null)

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
        setItems(error.message)
      }
    }
    fetchItems()
  }, [])

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item)
    setItems(listItems)
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)
  }

  const handleAddItem = (name) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = {name, id, checked: false}
    const listItems = [...items, myNewItem]
    setItems(listItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return;
    handleAddItem(newItem)
    setNewItem('')
  }
  
  return (
    <div className="App">
      <Header 
        title="Header"
      />
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItems 
        search={search}
        setSearch={setSearch}
      />
      <Content 
        items={items.filter((item) => (item.name.toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer 
        items={items}
      />
    </div>
  );
}

export default App;
