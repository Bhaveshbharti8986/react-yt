import React, { useState } from 'react'
import './Counter.css'
function Counter() {
    const [count,setCount] =useState(0);
  return (
    <div className="main-container">
    
        <p>You have clicked {count} times</p>
         <button className='btn' onClick={() => setCount((count) => count + 1)} >click me</button>
    </div>
  )
}

export default Counter