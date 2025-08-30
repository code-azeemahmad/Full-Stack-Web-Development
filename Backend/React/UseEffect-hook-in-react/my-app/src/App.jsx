import { useEffect, useState } from 'react';

import './App.css'

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {   
    alert("hey! Welcome to my Page.")   // Alert when the page is re-loaded
  }, [])

  useEffect(() => {   
    alert("Count was changed!")   // Runs every time count changes.
  }, [count])
  
  return (
    <>
      <div>The count is {count}</div>   {/* The count is {a} */} 
      <button onClick={() => {
        setCount(count + 1);             // a = a + 1     X
      }}>Update Count</button>
    </>
  )
}

export default App


/* Alert appears twice as strict mode is on in index.jsx */
