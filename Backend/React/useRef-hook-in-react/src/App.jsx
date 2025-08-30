import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  let a = 0;
  
  useEffect(() => {

    a = a + 1;
    
    alert(`re-rendering. The value of a is ${a}`)    // re-renders component when count(state variable) changes
  
  }, [count]);
  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App




/* const [count, setCount] = useState(0);
                                                  _________
  let a = 0;                                              |
                                                          |
  useEffect(() => {                                       |
    a = a + 1;                                            |----- Whole runs again and again when the state variable changes
    alert(`re-rendering. The value of a is ${a}`)         |
                                                          |    
  }, [count]);                                    ________|

  // So even though you increment a inside useEffect, after re-render a resets to 0 again, because it's a local variable.

*/   

// use useRef to persist value of a

/* Assignments to the 'a' variable from inside React Hook useEffect will be lost 
   after each render. To preserve the value over time, store it in a useRef Hook 
   and keep the mutable value in the '.current' property. Otherwise, you can move 
   this variable directly inside useEffect */