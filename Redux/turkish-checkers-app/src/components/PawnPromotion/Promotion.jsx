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
                    <img className='white-bishop' src="https://github.com/musabolug/Frontend/blob/master/Redux/turkish-checkers-app/src/assets/white-bishop.png?raw=true" alt="" />
                   <img className='white-knight' src="https://github.com/musabolug/Frontend/blob/master/Redux/turkish-checkers-app/src/assets/white-knight.png?raw=true" alt="" />
                   <img className='white-rook'src="https://github.com/musabolug/Frontend/blob/master/Redux/turkish-checkers-app/src/assets/white-rook.png?raw=true" alt="" />
                   <img className='white-queen'src="https://github.com/musabolug/Frontend/blob/master/Redux/turkish-checkers-app/src/assets/white-queen.png?raw=true" alt="" />
                </form>
                :""
            }
          {
                player === "black" ?
                <form action="">
                             <img className='black-bishop' src="https://github.com/musabolug/Frontend/blob/master/Redux/turkish-checkers-app/src/assets/black-bishop.png?raw=true" alt="" />
                   <img className='black-knight' src="https://github.com/musabolug/Frontend/blob/master/Redux/turkish-checkers-app/src/assets/black-knight.png?raw=true" alt="" />
                   <img className='black-rook'src="https://github.com/musabolug/Frontend/blob/master/Redux/turkish-checkers-app/src/assets/black-rook.png?raw=true" alt="" />
                   <img className='black-queen'src="https://github.com/musabolug/Frontend/blob/master/Redux/turkish-checkers-app/src/assets/black-queen.png?raw=true" alt="" />
            </form>
            :""
            }
        </div>
    </div>
  )
}

export default Promotion