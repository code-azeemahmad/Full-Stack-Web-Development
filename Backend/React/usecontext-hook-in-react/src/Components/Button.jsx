import React from 'react'
import Component1 from './Component1'
import { useContext } from 'react'
import { CounterContext } from '../context/context'
const Button = () => {
    const value = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => value.setCount((count) => count + 1)}><span><Component1 /></span>I am a button button</button>
    </div>
  )
}

export default Button