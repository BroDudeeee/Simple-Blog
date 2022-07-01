import { useState } from 'react';
import AddItem from './AddItem';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

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
    const myNewItem = {name: item.name, id, checked: false}
    const listItems = [...items, myNewItem]
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddItem(newItem)
    setNewItem('')
  }
  
  return (
    <div className="App">
      <Header 
        title="Header"
      />
      <Content 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer 
        items={items}
      />
      <AddItem 
        addItem = {addItem}
        setAddItem = {setAddItem}
      />
    </div>
  );
}

export default App;
