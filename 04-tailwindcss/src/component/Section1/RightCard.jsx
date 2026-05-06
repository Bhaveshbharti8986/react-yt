import React from 'react'
import CardContent from './CardContent'


function RightCard(props) {
  
  return (
    <div className='w-1/3 shrink-0 h-full  rounded-4xl  relative '>
    <img  className='w-full h-full object-cover rounded-4xl' src={props.img} alt="" />
    <CardContent className='relative' value={props.value} color={props.color}/>
    </div>
   
  )
}

export default RightCard