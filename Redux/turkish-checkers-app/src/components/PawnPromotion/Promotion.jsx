import React from 'react'
import "./Promotion.css"
import { useSelector, useDispatch} from 'react-redux'
function Promotion() {
    const {player} = useSelector((state)=> state.game)
  return (
    <div className='promotion-form'>
        <div className='selections'>
            {
                player === "white" ?
                <form action="">
                    <img className='white-bishop' src="https://github.com/musabolug/Frontend/blob/master/Redux/turkish-checkers-app/src/assets/White-bishop.png?raw=true" alt="" />
                   <img className='white-knight' src="https://github.com/musabolug/Frontend/blob/master/Redux/turkish-checkers-app/src/assets/White-knight.png?raw=true" alt="" />
                   <img className='white-rook'src="https://github.com/musabolug/Frontend/blob/master/Redux/turkish-checkers-app/src/assets/White-rook.png?raw=true" alt="" />
                   <img className='white-queen'src="https://github.com/musabolug/Frontend/blob/master/Redux/turkish-checkers-app/src/assets/White-queen.png?raw=true" alt="" />
                </form>
                :""
            }
          {
                player === "black" ?
                <form action="">
                             <img className='black-bishop' src="https://github.com/musabolug/Frontend/blob/master/Redux/turkish-checkers-app/src/assets/Black-bishop.png?raw=true" alt="" />
                   <img className='black-knight' src="https://github.com/musabolug/Frontend/blob/master/Redux/turkish-checkers-app/src/assets/Black-Knight.png?raw=true" alt="" />
                   <img className='black-rook'src="https://github.com/musabolug/Frontend/blob/master/Redux/turkish-checkers-app/src/assets/Black-rook.png?raw=true" alt="" />
                   <img className='black-queen'src="https://github.com/musabolug/Frontend/blob/master/Redux/turkish-checkers-app/src/assets/Black-queen.png?raw=true" alt="" />
            </form>
            :""
            }
        </div>
    </div>
  )
}

export default Promotion