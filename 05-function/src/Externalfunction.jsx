import React from 'react'

function Externalfunction() {
     const singleClick = () => {
    console.log("i am clicked once  ")
  }
  const doubleclick=()=>{
    console.log("i am double click ")
  }
 const mousemoved=()=>{
 console.log("mouse is moved on me ")
 }
 const changetext=(e)=>{
  console.log(e.target.value)
 }
  return (
    <div className='externalfun'><button onClick={singleClick}>single click</button>
      <button onDoubleClick={doubleclick}>double click</button>
      <button onMouseMove={mousemoved}> Mouse move</button>
      <input type="text" onChange={changetext} placeholder='Enter text ' /></div>
  )
}

export default Externalfunction