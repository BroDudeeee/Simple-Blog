import { useState } from 'react';
import './App.css';
import Content from './Content';

function App() {
  const [items, setItems] = useState([
    {name: "Pizza", checked: true, id: 1},
    {name: "Milk", checked: true, id: 2},
    {name: "Bread", checked: false, id: 3},
  ])
  
  return (
    <div className="App">
      <Content 
        items={items}
      />
    </div>
  );
}

export default App;
