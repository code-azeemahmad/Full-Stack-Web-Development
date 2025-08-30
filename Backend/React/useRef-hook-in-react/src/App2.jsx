import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App2() {
  const [count, setCount] = useState(0);

  const btnRef = useRef(0);        // Accessing and manipulating DOM elements directly
  
  useEffect(() => {

    console.log(`First rendering...`);
    btnRef.current.style.backgroundColor = "red";
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
        <button ref={btnRef} onClick={() => setCount((count) => count + 1)}>       {/* targetting DOM element using ref.current */}
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={() => {btnRef.current.style.display = "none"}}>Hide the Counter</button>
    </>
  )
}

export default App2




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