import { useEffect, useState } from "react"
import AddItem from "./AddItem"
import Content from "./Content"
import Footer from "./Footer"
import Header from "./Header"
import SearchItems from "./SearchItems"

window.addEventListener('keydown', function (e) {
  if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) {
    if (document.getElementById('search') !== document.activeElement) {
      e.preventDefault();
      console.log('Search is not in focus');
      document.getElementById('search').focus();
    } else {
      console.log('Default action of CtrlF');
      return true;
    }
  }
});

const App = () => {
  const [ items, setItems ] = useState([])
  const [newItem, setNewItem] = useState('')
  const [ search, setSearch ] = useState('')

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem('shoppinglist')))
    console.log('loading items')
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