import React from 'react'
import './UserCard.css'
import bhagatpic from '../assets/bhagatsingh.jpg'
function UserCard(proto) {
  return (
<div className="usercard">
    <div className="heading">
        <h3>{proto.name}</h3>
    </div>
    <img src={proto.image} alt=" img" />
    
    <div className="disc">
        <h2>Description</h2><br></br>{proto.disc}</div>
    
</div>
  )
}

export default UserCard 