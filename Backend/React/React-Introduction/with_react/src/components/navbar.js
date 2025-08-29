// rafce --> reactArrowFunctionSupportComponent

import React from 'react'

const Navbar = () => {      // components should be capitalized, otherwise it will be treated as html tags
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
