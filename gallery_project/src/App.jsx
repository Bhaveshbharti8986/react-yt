import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Card from './component/Card'

function App() {
  const [UserData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
//geting data using axox api call , and set data into userData using usestate
 const  GetData= async()=>{
  //replace page no with index in the link
  const response=await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)
  setUserData(response.data)
  console.log( response.data)
 }
 //use of use effect to  reload data and call function   getdata
useEffect(function(){
  GetData()
},[index])

//initial index is 1 
  
 const PrevPage=()=>{
  if(index>1){
    setIndex(index-1)
  }
 }
 const NextPage=()=>{
  setIndex(index+1)
  console.log("nextpage",index);
 }
  // dispalay  user data function for reload data from userdata
 let printuser=<h1 className='w-full min-h-[75%] font-semibold text-blue-100 text-2xl flex justify-center items-center '>Loading...</h1>
 if(UserData.length>0){
  printuser= <div className='w-full min-h-[75%] h-auto  flex flex-wrap gap-5 justify-center items-center '>

        {
         
          UserData.map((item,idx)=>{
            return(
        //user image and author name 
             
         <Card key={item.idx} url={item.url} download_url={item.download_url} author={item.author}/>
        
       
                )
              })
        }
      </div>
 }
  return (
    <div className='  h-screen bg-lime-950 text-white  overflow-auto px-10 py-5 relative'>
      <h2 className='text-white  text-2xl text-shadow-cyan-400  font-bold'>Photos</h2>
{/* print user data   */}
      {
        printuser
      }

       {/* bottom section -for nevigation button */}
      <div className='w-full flex justify-center items-center gap-5 p-10 mt-5'>
        <button 
        onClick={PrevPage}
        className='p-1 w-23 bg-yellow-600 font-medium text-xl text-black rounded cursor-pointer active:scale-95'
        >Prev</button>
        <h2 className=' font-medium text-xl'> Page {index}</h2>
        <button 
        onClick={NextPage}
        className='p-1 w-23 bg-yellow-600 font-medium text-xl  text-black rounded cursor-pointer active:scale-95'
        >Next</button>
      </div>


    </div>
  )
}

export default App