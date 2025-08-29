import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar';

function App() {
  const [value, setValue] = useState(0);
  return (
    
    <div className="App">
       <Navbar/>  
      <div className="value">{value}</div>
      <button className="btn" onClick={ ()=> { setValue(value + 1);} }>Click me</button>
    </div>
  );
}

export default App;

// Look how concise the code is
