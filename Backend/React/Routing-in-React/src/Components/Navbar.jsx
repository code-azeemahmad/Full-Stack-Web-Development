import React from 'react'

const Navbar = () => {
  return (
    <div>
      <ul>
        <a href="/"><li>Home</li></a>
        <a href="/login"><li>Login</li></a>
        <a href="/about"><li>About</li></a>
      </ul>
    </div>
  )
}

// <a href="..."> reloads the entire page (bad in SPAs).

export default Navbar

// The problem arises when we click the link or update the page,
// the page reloads, to solve this npm i react-router-dom
