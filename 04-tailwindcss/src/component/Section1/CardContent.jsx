import React from 'react'
import CardButton from './CardButton'
function CardContent(props) {
  return (
     <div className='w-full h-full  rounded-4xl p-10 shadow-xl flex flex-col justify-between absolute top-0 left-0 '>
        <p className='border-amber-900 rounded-full text-2xl text-black  bg-amber-50 w-10 h-10 flex justify-center items-center '>{props.value}</p>
        <div className='flex flex-col gap-5 text-2xl  text-white leading-relaxed '>
        <p>Prime customers,that have access to bank credit and are satisfied with the current product</p>
        <CardButton color={props.color}/>   
        </div>
        </div>
  )
}

export default CardContent