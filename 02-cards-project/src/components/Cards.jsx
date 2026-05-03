import React from 'react'
import {Bookmark} from 'lucide-react'
function Cards(props) {
  return (
    
    <div className="card">
       <div className="top">
        <img src={props.img} alt="" />
        <button> save <Bookmark /></button>
       </div>
       <div className="center">
        <div> <h3>{props.brandname}</h3><span>{props.day}</span></div>
        <h2>{props.level} {props.type}</h2>
        <div>
        <button>{props.type1}</button>
        <button> {props.level} level</button>
        </div>
       </div>

       <div className="bottom">
        <div>
          <h3>{props.charge}</h3>
         <span>{props.location}</span>
        </div>
        <button>
            Apply now
        </button>
       </div>
    </div>
   
  )
}

export default Cards