import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserCard from './components/UserCard.jsx'
import bhagatpic from './assets/bhagatsingh.jpg'
import maharanapic from './assets/maharanapratap.jpg'
import sivajipic from './assets/sivaji.jpg'
createRoot(document.getElementById('root')).render(
  <div className='main-container'>
  <UserCard image={bhagatpic} name={"Bhagat Singh"} disc={"Bhagat Singh, born 1907, was a revolutionary freedom fighter who opposed British rule, embraced socialism, and sacrificed his life for India"}/>
  <UserCard image={maharanapic}   name={" Maharana Pratap"} disc={"Maharana Pratap, born 1540, was a Rajput king of Mewar who resisted Akbar, symbolizing courage, sacrifice, and Rajput pride"}/>
  <UserCard image={sivajipic}  name={"Shivaji Maharaj"} disc={"Shivaji Maharaj, born 1630, founded the Maratha Empire, resisted Mughal rule, promoted Hindu values, and pioneered strong administration and navy."}/>
 
  </div>,
)
