import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)   // make a state named 'count' and set its initial value = 0, and make another funnction names 'setCount' to help update the count
  // let a = 0;
  return (
    <>
       <div>The count is {count}</div>   {/* The count is {a} */} 
      <button onClick={() => {
        setCount(count + 1);             // a = a + 1     X
      }}>Update Count</button>
    </>
  )         // useState keeps on updating the updated value
}

export default App

// Hooks are special functions that let you use state and other React features inside functional components e.g useState()

/*

1. What is State in React?
      --> State = memory inside a component.
      --> It lets your component remember values across re-renders.
      --> Example: a button click counter. Each click updates the state and React re-renders the UI with the new value.
      -->  Without state, your UI would be static and never update.
 */

// in react, page is not reloaded when we update something or switch to another page
