import React, { useState } from 'react'
import "./Header.css"
import { setShowUserForm,resetGame } from '../../redux/gameSlice'
import { useDispatch, useSelector } from 'react-redux'
function Header() {
  const {showUserForm,gameStatus} = useSelector((state)=> state.game)
const dispatch = useDispatch()

    const handleClick= ()=>{
        if(!showUserForm){
            dispatch(setShowUserForm(true))
        }
    }
    const handleReset = ()=>{

        dispatch(resetGame())
        dispatch(setShowUserForm(true))
    }
  return (
    <div className='header'>
        <h1>
            CHESS GAME
        </h1>
        {
            gameStatus ==="" &&
        <button className='button' onClick={(e)=>handleClick()}>
             PLAY
        </button>

        }{
            gameStatus ==="playing" &&
            <button className='button' onClick={(e)=>handleReset()}>
                 RESET
            </button>
            
        }
    </div>
  )
}

export default Header