import React, { useState } from 'react'
import './Counter.css'
function Counter() {
   
    const [value, setvalue] = useState(0);
    let increase=()=>{
    setvalue(value+1)
    }
      let decrease=()=>{
     setvalue(value-1)
    }
    let set100=()=>{
      setvalue(100)
    }
    let set0=()=>{
      setvalue(0)
    }
  return (
    <div className="main-container">
      <p>curent value is {value}</p>
      <div className='button'>
         <button onClick={increase}>increase</button>
         <button onClick={decrease}>decrease</button>
         <button onClick={set100}> setvalue 100</button>
         <button onClick={set0}> setvalue 0</button>
      </div>
    </div>
  )
}

export default Counter