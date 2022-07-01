import { useState } from 'react';
import AddItem from './AddItem';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import SearchItems from './SearchItems';

function App() {
  const [items, setItems] = useState([
    {
      name: "Pizza", 
      checked: true, 
      id: 1
    },
    {
      name: "Milk", 
      checked: true, 
      id: 2
    },
    {
      name: "Bread", 
      checked: false, 
      id: 3
    },
  ])

  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item)
    setItems(listItems)
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)
  }

  const handleAddItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = {name: newItem, id, checked: false}
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
        items={items.map(item[(item) => (item.name.toLowerCase()).includes(search.toLowerCase())])}
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
