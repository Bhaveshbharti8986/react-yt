import React from 'react'
import { CornerDownRight } from 'lucide-react';

function Navbar() {
  return (
    <div className='flex justify-between  items-center w-full h-3 p-3 my-5  '>
      <button className='bg-gray-800 rounded-3xl p-2  font-medium  text-sm text-white uppercase'> target Audience</button> 
      <div className='flex '>
         <p className='uppercase   font-mediun  p-2 -mx-3 bg-gray-200 rounded-full text-black'><CornerDownRight  /></p>

        <p className='uppercase   font-mediun  p-2  bg-gray-200 rounded-3xl'>digital banking platform</p>

        </div>
    </div>
  )
}

export default Navbar