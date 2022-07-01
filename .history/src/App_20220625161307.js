import { useEffect, useState } from 'react';
import AddItem from './AddItem';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import SearchItems from './SearchItems';
import apiRequest from './apiRequest';

function App() {
  const API_URL = "http://localhost:3500/items"
  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')
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
        console.log(error.message)
        setFetchError(error.message)
      } finally {
        setIsLoading(false)
      }
    }
    setTimeout(() => {
      fetchItems()
    }, 2000)
  }, [])

  const handleCheck = async (id) => {
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item)
    setItems(listItems)

    const myItem = listItems.filter((item) => item.id === id)
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({checked: myItem[0].checked})
    }
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, updateOptions)
    if (result) setFetchError(result)
  }

  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)

    const deleteOptions = {method: 'DELETE',}
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, deleteOptions)
    if(result) setFetchError(result)
  }

  const handleAddItem = async (name) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = {name, id, checked: false}
    const listItems = [...items, myNewItem]
    setItems(listItems)

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }
    const result = await apiRequest(API_URL, postOptions)
    if (result) setFetchError(result)
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
      {isLoading && <p>Loading...</p>}
      {fetchError && <p style={{color: "red"}}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content 
          items={items.filter((item) => (item.name.toLowerCase()).includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />}
      <Footer 
        items={items}
      />
    </div>
  );
}

export default App;
