import ChessBoard from '../ChessBoard/ChessBoard'
import "./Main.css"
import Header from '../Header/Header'
import Footer from "../Footer/Footer"
import Promotion from '../PawnPromotion/Promotion'
import Result from '../ResultModal/Result'
import {  useSelector } from 'react-redux'
import UserForm from '../UserForm/UserForm'
function Main() {
  const {showUserForm,openPromote,showModal} = useSelector((state)=> state.game)

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
        {
          showModal &&
          <Result/>
        }
        <ChessBoard/>
        <Footer/>
        
    </div>
  )
}

export default Main