import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('Kevin')
  return (
    <div className="App">
      <h1>Hello, {name}</h1>
      <button>Toggle</button>
    </div>
  );
}

export default App;
