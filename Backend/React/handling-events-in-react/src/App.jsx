import { useState } from 'react'
import './App.css'

function App() {

  const [name, setname] = useState("Azeem")
  const handleClick = () => {
    alert("I was clicked!")
  }

  const handleMouseOver = () => {
    alert("I am a mouse over!")
  }

  const handleChange = (e) => {
    setname(e.target.value);
  }
  return (
    <>
        <button className="btn" onClick={handleClick}>Click me</button>

        <div className="red" onMouseOver={handleMouseOver}>Hey! I am red.</div>

        <input type="text" value={name} onChange={handleChange}/>
    </>
  )
}

export default App
