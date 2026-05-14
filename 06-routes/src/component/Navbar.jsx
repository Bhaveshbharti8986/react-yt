import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav'>
      
    <Link to={'/home'}>Home</Link>
    <Link to={'/about'}>About</Link>
    <Link to={'/contact'}>Contactus</Link>
    <Link to={'/product'}>products</Link>
  
    </div>
  )
}

export default Navbar