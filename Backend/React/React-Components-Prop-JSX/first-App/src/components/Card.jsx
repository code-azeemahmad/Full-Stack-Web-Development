import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div className='card' style={{overflow: "hidden"}}>
      <h1>{props.title}</h1>
      <img src="https://i.pinimg.com/736x/57/cb/41/57cb419dc415cf86d0ae8a01f35373d2.jpg" alt="ei" />
      <p>{props.description}</p>
    </div>
  )
}

export default Card

// inline css 
// <div className='card' style={{overflow: "hidden"}}>
// {} using javascript
// {{}} using javascript object
