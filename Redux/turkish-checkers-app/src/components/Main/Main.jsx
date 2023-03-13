import React from 'react'
import ChessBoard from '../ChessBoard/ChessBoard'
import "./Main.css"
import Header from '../Header/Header'
import Footer from "../Footer/Footer"
import { useDispatch, useSelector } from 'react-redux'
import UserForm from '../UserForm/UserForm'
function Main() {
  const dispatch = useDispatch()
  const {showUserForm} = useSelector((state)=> state.game)
  return (
    <div className='app'>
        <Header/>
        {
          showUserForm &&
          <UserForm/>
        }
        <ChessBoard/>
        <Footer/>
        
    </div>
  )
}

export default Main