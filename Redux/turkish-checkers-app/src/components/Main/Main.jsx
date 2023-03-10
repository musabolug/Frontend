import React from 'react'
import ChessBoard from '../ChessBoard/ChessBoard'
import "./Main.css"
import Header from '../Header/Header'
import Footer from "../Footer/Footer"
function Main() {
  return (
    <div className='app'>
        <Header/>
        <ChessBoard/>
        <Footer/>
    </div>
  )
}

export default Main