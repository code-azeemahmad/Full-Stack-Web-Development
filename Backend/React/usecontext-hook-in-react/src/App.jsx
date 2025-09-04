import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Component1 from './Components/Component1'
import Button from './Components/Button'
import { CounterContext } from './context/context.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CounterContext.Provider value = {count}>   {/* count will be shared among all components */}
      <Navbar />
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
      </CounterContext.Provider>
    </>
  )
}

// No prop drilling → Navbar → Button → Component1 can access state directly.
// Shared state → all components update together.

export default App

/*
    App.jsx
        Navbar.jsx
              Button.jsx
                    Component1.jsx
*/