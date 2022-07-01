import { useState } from 'react';
import './App.css';
import Content from './Content';

function App() {
  const [name, setName] = useState([
    {name: "Pizza", checked: true, id: 1},
    {name: "Milk", checked: true, id: 2},
    {name: "Bread", checked: false, id: 3},
  ])
  const [count, setCount] = useState(0)

  const toggleName = () => {
    const names = ['Rachel', 'Monica', 'Phoebe', 'Joey','Chandler', 'Ross']
    const intName = Math.floor(Math.random()*names.length)
    setName(names[intName])
  }

  const handlePlusCount = () => {
    setCount(count + 1)
  }

  const handleMinusCount = () => {
    setCount(count - 1)
  }

  return (
    <div className="App">
      <Content />
    </div>
  );
}

export default App;
