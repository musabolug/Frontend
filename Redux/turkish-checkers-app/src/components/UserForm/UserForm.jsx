import {useState,} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startGame ,setShowUserForm} from '../../redux/gameSlice'
import Button from 'react-bootstrap/Button';
 import "./UserForm.css"
function UserForm() {
    const dispatch = useDispatch()
    const [user1,setUser1] = useState("")
    const [user2,setUser2] = useState("")

    const handleClick=()=>{
        if(user1 && user2){
            dispatch(startGame({user1:user1,user2:user2}))
            dispatch(setShowUserForm(false))
        }
    }

  return (
    <div className='user-form'>
  

               <form className="form">
                <p className="heading">Please Enter <br /> Names</p>
                <input type="text" className="input" placeholder="Player1"  value={user1} onChange={(e)=> setUser1(e.target.value)}/>
                <input type="text" className="input" placeholder="Player2"  value={user2}onChange={(e)=> setUser2(e.target.value)}/>
                <Button className="btn" onClick={(e)=>handleClick()}>PLAY</Button>
            </form>

    </div>
  )
}

export default UserForm