import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('Name')

  const toggleName = () => {
    const names = ['Rachel', 'Monica', 'Phoebe', 'Joey','Chandler', 'Ross']
    const intName = Math.floor(Math.random()*names.length)
    setName(names[intName])
  }
  return (
    <div className="App">
      <h1>Hello, {name}!</h1>
      <button onClick={toggleName}>Toggle</button>
    </div>
  );
}

export default App;
