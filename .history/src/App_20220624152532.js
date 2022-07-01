import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('Name')
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
      <h1>Hello, {name}!</h1>
      <h3>Number {count}</h3>
      <button onClick={toggleName}>Toggle</button>
      <hr />
      <button onClick={handlePlusCount}>+</button>
      <button onClick={handleMinusCount}>-</button>
    </div>
  );
}

export default App;
