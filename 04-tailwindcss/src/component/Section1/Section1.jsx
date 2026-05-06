import React from 'react'
import Navbar from './Navbar'
import Page1 from './Page1'

function section1(props) {
  return (
    <div className=' w-full h-screen px-10 py-10  '>      
        <Navbar/>
      <Page1 user={props.user}/>
    </div>
  )
}

export default section1