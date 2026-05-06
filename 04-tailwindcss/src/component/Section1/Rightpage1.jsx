import React from 'react'
import RightCard from './RightCard'

function Rightpage1(props) {
  
  return (
     <div id='right' className='w-2/3 h-full rounded-3xl p-5 flex flex-row flex-nowrap gap-5  m-3 overflow-x-auto '>
    {
      props.user.map((elm,index)=>(
        <RightCard  key={index}value={index+1} img={elm.img} color={elm.color}/>
      ))
    }
       
 
    </div>
  )
}

export default Rightpage1