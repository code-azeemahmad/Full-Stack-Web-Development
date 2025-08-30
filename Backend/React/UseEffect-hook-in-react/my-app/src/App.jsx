import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [color, setcolor] = useState(0)

  useEffect(() => {   
    alert("Count was changed!")   // Runs every time count changes.
    setcolor(color+1);
  }, [count])
  
  return (
    <>
     <Navbar color={"dark" + "yellow" + color } />                  {/* prop send to Navbar.jsx to trigger color useEffect hook */}
      <div>The count is {count}</div> 
      <button onClick={() => {
        setCount(count + 1);             
      }}>Update Count</button>
    </>   // REACT re-renders that component everytime whose state is changed
  )
}

export default App


/* Alert appears twice as strict mode is on in index.jsx */
