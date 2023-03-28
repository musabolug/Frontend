import React from 'react'
import ChessBoard from '../ChessBoard/ChessBoard'
import "./Main.css"
import Header from '../Header/Header'
import Footer from "../Footer/Footer"
import Promotion from '../PawnPromotion/Promotion'
import { useDispatch, useSelector } from 'react-redux'
import UserForm from '../UserForm/UserForm'
function Main() {
  const dispatch = useDispatch()
  const {showUserForm,openPromote} = useSelector((state)=> state.game)
  return (
    <div className='app'>
        <Header/>
        {
          showUserForm &&
          <UserForm/>
        }
        {
          openPromote &&
          <Promotion/>
        }
        <ChessBoard/>
        <Footer/>
        
    </div>
  )
}

export default Main