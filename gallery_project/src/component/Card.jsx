import React from 'react'

function Card(props) {
  return (
    <div>
             <a href={props.url} target='blank'>
             <div
            key={props.idx}
            className='w-50 h-55 p-1 rounded-2xl object-cover  bg-white flex flex-col items-center '
          > 
          
            <img 
              src={props.download_url} 
              alt="" 
              className='object-cover rounded-2xl w-full h-[90%]'
              />
              <h3 
              className='text-xl  text-black'
              >{props.author}</h3>
               
           </div>
          </a>
    </div>
  )
}

export default Card