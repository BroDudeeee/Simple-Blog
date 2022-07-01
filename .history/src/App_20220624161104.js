import { useState } from 'react';
import './App.css';
import Content from './Content';

function App() {
  const [items, setItems] = useState([
    {name: "Pizza", checked: true, id: 1},
    {name: "Milk", checked: true, id: 2},
    {name: "Bread", checked: false, id: 3},
  ])

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? ({...item, checked: !checked}) : item)
    setItems(listItems)
  }
  
  return (
    <div className="App">
      <Content 
        items={items}
        handleCheck={handleCheck}
      />
    </div>
  );
}

export default App;
