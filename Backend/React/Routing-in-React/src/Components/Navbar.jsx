import React from 'react'

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <Link to ="/"><li>Home</li></Link>
        <Link to ="/login"><li>Login</li></Link>
        <Link to ="/about"><li>About</li></Link>
      </ul>
    </div>
  )
}

// <a href="..."> reloads the entire page (bad in SPAs).
// <Link to="..."> changes the route without refreshing, keeping React state intact.

export default Navbar

// The problem arises when we click the Link or update the page,
// the page reloads, to solve this npm i react-router-dom
