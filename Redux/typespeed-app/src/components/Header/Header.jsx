import React from 'react'
import "./header.css"
import { useSelector } from 'react-redux'
function Header() {
  const {selectedLanguage} = useSelector((state)=> state.typespeed)
  return (
    <div className='Header'>
        <div className='heading'>{selectedLanguage==="EN" ?"Test your typing skills":"Yazma becerini test et"}</div>
    </div>
  )
}

export default Header