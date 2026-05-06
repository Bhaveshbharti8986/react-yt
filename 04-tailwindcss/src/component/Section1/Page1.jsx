import React from 'react'
import Leftpage1 from './Leftpage1'
import Rightpage1 from './Rightpage1'

function Page1(props) {
  return (
<div className='flex gap-5 w-full h-[90%] relative  '>
    <Leftpage1/>
   <Rightpage1 user={props.user}/>
</div>
  )
}

export default Page1