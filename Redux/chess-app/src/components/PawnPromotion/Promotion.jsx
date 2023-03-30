import React from 'react'
import "./Promotion.css"
import { useSelector, useDispatch} from 'react-redux'
import { poromotePawnForm } from '../../redux/gameSlice'
function Promotion() {
    const {player} = useSelector((state)=> state.game)
    const dispatch = useDispatch()
    const handleClick= (e)=>{
      let ClassName = e.target.className
      dispatch(poromotePawnForm(ClassName))
    }
    
  return (
    <div className='promotion-form'>
        <div className='selections'>
            {
                player === "black" ?
                <form action="" >
                    
                        
                    <img onClick={(e)=> handleClick(e)} className='white-bishop' src="https://github.com/musabolug/Frontend/blob/master/Redux/turkish-checkers-app/src/assets/Wbishop.png?raw=true" alt=""  />
                   <img onClick={(e)=> handleClick(e)} className='white-knight' src="https://github.com/musabolug/Frontend/blob/master/Redux/turkish-checkers-app/src/assets/Wknight.png?raw=true" alt="" />
                   <img onClick={(e)=> handleClick(e)}className='white-rook'src="https://github.com/musabolug/Frontend/blob/master/Redux/turkish-checkers-app/src/assets/Wrook.png?raw=true" alt="" />
                   <img onClick={(e)=> handleClick(e)}className='white-queen'src="https://github.com/musabolug/Frontend/blob/master/Redux/turkish-checkers-app/src/assets/Wqueen.png?raw=true" alt="" />
                   
                </form>
                :""
            }
          {
                player === "white" ?
                <form action="">
                   <img onClick={(e)=> handleClick(e)}className='black-bishop' src="https://github.com/musabolug/Frontend/blob/master/Redux/turkish-checkers-app/src/assets/Bbishop.png?raw=true" alt="" />
                   <img onClick={(e)=> handleClick(e)}className='black-knight' src="https://github.com/musabolug/Frontend/blob/master/Redux/turkish-checkers-app/src/assets/Bknight.png?raw=true" alt="" />
                   <img onClick={(e)=> handleClick(e)}className='black-rook'src="https://github.com/musabolug/Frontend/blob/master/Redux/turkish-checkers-app/src/assets/Brook.png?raw=true" alt="" />
                   <img onClick={(e)=> handleClick(e)}className='black-queen'src="https://github.com/musabolug/Frontend/blob/master/Redux/turkish-checkers-app/src/assets/Bqueen.png?raw=true" alt="" />
            </form>
            :""
            }
        </div>
    </div>
  )
}

export default Promotion