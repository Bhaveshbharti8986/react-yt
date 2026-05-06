import React from 'react'
import style from './Header.module.css'
function Header() {
  return (
    <div className={style.header} > 
    <p>this is hearder tag :Header</p>
    <p> style using header css module , </p>
    <button>signup </button>
    </div>
  )
}

export default Header