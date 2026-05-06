import React from 'react'
import { ArrowRight } from 'lucide-react'
function CardButton(props) {
  return (
    
        <div className='flex justify-between items-center  '> 
                <button  style={{backgroundColor:props.color}} className='border-amber-900 rounded-full text-xl   w-fit h-fit px-3 py-1 '>
                    satisfied
                </button>
                <button  style={{backgroundColor:props.color}}  className='border-amber-900 rounded-full text-xl  w-fit h-fit px-3 py-1' >
                  <ArrowRight size={30}/>
                </button>

            </div>

  )
}

export default CardButton