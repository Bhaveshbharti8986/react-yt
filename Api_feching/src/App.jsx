import React from 'react'
import './App.css'
import axios from 'axios'
import { useState } from 'react'
function App() {
  
// const fetchData=async()=>{
//   try {
//     const response=await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data=await response.json()
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

//fecthing data using axios
const [data, setdata] = useState([])
const fetchData=async()=>{
  try{
    const {data}=await axios.get('https://jsonplaceholder.typicode.com/posts')
    setdata(data)
  }
  catch(error){
    console.log(error);
  }
}
  return (
    <div>
      <button onClick={fetchData}className='btn'>fetchdata</button>
      {
        data.map((obj,index)=>{
          return (
            <div key={index}>
              
              <h1>{index+1} {obj.title}</h1>
              <p>{obj.body}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default App